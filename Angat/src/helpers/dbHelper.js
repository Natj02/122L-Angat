import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

export const getProjects = async (statuses = [], asc = false) => {
    let query = supabase.from("project").select("*").order("end_date", { ascending: asc });

    if (statuses.length > 0) {
        query = query.in("status", statuses); // Fetch only projects with the given statuses
    }
    const { data, error } = await query;

    if (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
    return data;
};

// Custom hook to fetch projects dynamically
export const useProjects = (statuses = [], asc = false) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects(statuses, asc);
            setProjects(data);
        };
        fetchProjects();
    }, [JSON.stringify(statuses)]); // Re-fetch if `status` changes

    return projects;
};

const getNews = async (status = null) => {
    let query = supabase.from("news").select("*").order("updated_at", {ascending: false});

    if (status) {
        query = query.eq("status", status);
    }
    const { data, error } = await query;

    if (error) {
        console.error("Error fetching News:", error);
        return [];
    }
    return data;
};
export const useNews = (status = null) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const data = await getNews(status);
            setNews(data);
        };
        fetchNews();
    }, [status]); // Re-fetch if `status` changes

    return news;
};
