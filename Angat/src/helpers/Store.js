import { create } from "zustand";
import supabase from "./supabaseClient";

const useStore = create((set, get) => ({
    projects: [],
    news: [],

    // Fetch Projects (with optional filtering by status and sorting)
    fetchProjects: async (asc = false) => {
        let query = supabase.from("project").select("*").order("end_date", { ascending: asc });

        const { data, error } = await query;
        if (error) {
            console.error("Error fetching projects:", error);
            return [];
        }

        set({ projects: data });
        console.log(data);
        return data;
    },
    // Fetch News (with optional filtering by status)
    fetchNews: async () => {
        let query = supabase.from("news").select("*").order("updated_at", { ascending: false });

        const { data, error } = await query;
        if (error) {
            console.error("Error fetching news:", error);
            return [];
        }

        set({ news: data });
        return data;
    },

    // Update Project Status
    updateProjectStatus: async (projectId, status) => {
        const { error } = await supabase
            .from("project")
            .update({ status })
            .eq("projectid", projectId);

        if (error) {
            console.error("Error updating project status:", error);
            return false;
        }

        console.log(`Status of Project ${projectId} changed to ${status}!`);
        set((state) => ({
            projects: state.projects.map((project) =>
                project.projectid === projectId ? { ...project, status } : project
            ),
        }));
        return true;
    },

    // Update News Status
    updateNewsStatus: async (newsId, status) => {
        const { error } = await supabase
            .from("news")
            .update({ status })
            .eq("newsid", newsId);

        if (error) {
            console.error("Error updating news status:", error);
            return false;
        }

        console.log(`Status of News ${newsId} changed to ${status}!`);
        set((state) => ({
            news: state.news.map((item) =>
                item.newsid === newsId ? { ...item, status } : item
            ),
        }));
        return true;
    },

    // Subscribe to Real-time Updates (Projects & News)
    subscribeToProjects: () => {
        const channel = supabase
            .channel("project_changes")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "project" }, (payload) => {
                set((state) => ({ projects: [...state.projects, payload.new] }));
            })
            .on("postgres_changes", { event: "UPDATE", schema: "public", table: "project" }, (payload) => {
                set((state) => ({
                    projects: state.projects.map((project) =>
                        project.projectid === payload.new.projectid ? payload.new : project
                    ),
                }));
            })
            .on("postgres_changes", { event: "DELETE", schema: "public", table: "project" }, (payload) => {
                set((state) => ({
                    projects: state.projects.filter((project) => project.projectid !== payload.old.projectid),
                }));
            })
            .subscribe();
    
        return channel;
    },
    
    subscribeToNews: () => {
        const channel = supabase
            .channel("news_changes")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "news" }, (payload) => {
                set((state) => ({ news: [...state.news, payload.new] }));
            })
            .on("postgres_changes", { event: "UPDATE", schema: "public", table: "news" }, (payload) => {
                set((state) => ({
                    news: state.news.map((item) =>
                        item.newsid === payload.new.newsid ? payload.new : item
                    ),
                }));
            })
            .on("postgres_changes", { event: "DELETE", schema: "public", table: "news" }, (payload) => {
                set((state) => ({
                    news: state.news.filter((item) => item.newsid !== payload.old.newsid),
                }));
            })
            .subscribe();
    
        return channel;
    }, 

    // Fetch Public Image URL from Supabase Storage
    getImage: (bucket_name, img_filename) => {
        const { data, error } = supabase.storage.from(bucket_name).getPublicUrl(img_filename);

        if (error) {
            console.error("Error fetching file URL:", error);
            return null;
        }

        return data?.publicUrl;
    },
}));

export default useStore;
