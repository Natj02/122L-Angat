import useStore from '../../helpers/Store';

function PendingNewsItem(props) {
    const updateNewsStatus = useStore((state) => state.updateNewsStatus);
    let deleteId = props.title + 'Delete'

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 w-full items-center bg-base-300 p-3 rounded-lg'>
                <img className='object-cover w-full h-full min-h-0 min-w-0 rounded-lg
                        max-h-64 md:max-h-32
                        max-w-none md:max-w-48' src={props.img} alt="" />
                <div className='flex flex-col w-full'>
                    <div className='font-bold text-2xl'>
                        {props.title}
                    </div>
                    <div className="font-bold text-sm">
                        Created on: {props.date}
                    </div>
                    <div className="text-sm overflow-hidden text-ellipsis line-clamp-3 h-16">
                        {props.description}
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full md:w-auto">
                    <button className='btn btn-primary grow md:grow-0' onClick={() => document.getElementById(props.title).showModal()}>
                        Approve
                    </button>
                    <dialog id={props.title} className="modal">
                        <div className="modal-box bg-base-200">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Approve News</h3>
                            <div>
                                Are you sure you want to approve <span className="font-bold">{props.title}</span>?
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className='btn btn-primary grow'
                                    onClick={async () => {
                                        const success = await updateNewsStatus(props.newsid, "approved");
                                        if (success) {
                                            console.log(`News Item ${props.newsid} approved successfully!`);
                                            document.getElementById(props.title).close();
                                        } else {
                                            console.error(`Failed to approve News Item ${props.newsid}`);
                                        }
                                    }}>
                                    Yes
                                </div>
                                <div className='btn btn-primary grow ' onClick={() => document.getElementById(props.title).close()}>
                                    No
                                </div>
                            </div>
                        </div>
                    </dialog>
                    <button className='btn btn-primary grow md:grow-0' onClick={() => document.getElementById(deleteId).showModal()}>
                        Reject
                    </button>
                    <dialog id={deleteId} className="modal">
                        <div className="modal-box bg-base-200">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Reject Project</h3>
                            <div>
                                Are you sure you want to reject <span className="font-bold">{props.title}</span>?
                            </div>
                            <div className="flex flex-row gap-2">
                                <div className='btn btn-primary grow '
                                    onClick={async () => {
                                        const success = await updateNewsStatus(props.newsid, "rejected");
                                        if (success) {
                                            console.log(`News Item ${props.newsid} rejected successfully!`);
                                            document.getElementById(deleteId).close();
                                        } else {
                                            console.error(`Failed to reject News Item ${props.newsid}`);
                                        }
                                    }}>
                                    Yes
                                </div>
                                <div className='btn btn-primary grow ' onClick={() => document.getElementById(deleteId).close()}>
                                    No
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>)
}

export default PendingNewsItem