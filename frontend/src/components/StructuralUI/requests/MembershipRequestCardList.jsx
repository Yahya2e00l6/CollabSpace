import { useEffect, useState } from "react";
import style from "../../../Style/StructuralUI/requests/MembershipRequestCardList.module.css"
import MembershipRequestCard from "./MembershipRequestCard";
import { get } from "../../../api/client";

const MembershipRequestCardList = () =>{
    const [ joinRequestsData , setJoinRequests ] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await get(`/auth/requests`)
                if(response){
                    setJoinRequests(response)
                    console.log(response)
                }
            }catch(e){
                console.error(e)
            }
        }
    fetchData()
    },[])
    const updateRequestStatus = (requestId, newStatus) => {
            setJoinRequests((prevData) =>
                prevData.map((req) =>
                    req.id === requestId 
                        ? { ...req, status: newStatus, updatedAt: new Date().toISOString() } 
                        : req
                )
            );
        };
    return(
        <>
            <div className={style.list}>
                {
                    joinRequestsData.length > 0 ? 
                    (
                        <div className={style.tableWrapper}>
                            <table className={style.table}>
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}></th>
                                        <th className={style.th}>Full Name</th>
                                        <th className={style.th}>Gender</th>
                                        <th className={style.th}>cin</th>
                                        <th className={style.th}>Age</th>
                                        <th className={style.th}>Email</th>
                                        <th className={style.th}>Phone</th>
                                        <th className={style.th}>Request Date</th>
                                        <th className={style.th}>Status</th>
                                        <th className={style.th}>Action</th>
                                    </tr>
                                </thead>
                                <tbody className={style.tbody}>
                                    {
                                        joinRequestsData.map((d) => (
                                            <MembershipRequestCard 
                                                key={d.id}
                                                requestId={d.id}
                                                Gender={d.gender} 
                                                fullName = {d.fullName}
                                                Email={d.email} 
                                                Phone={d.phone} 
                                                Status={d.status}
                                                Age={d.age} 
                                                createdAt={d.createdAt.split('T')[0] || ''} 
                                                updatedAt={d.updatedAt.split('T')[0] || ''}
                                                cin = {d.cin}
                                                onStatusUpdate ={updateRequestStatus}
                                            />
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                    :
                    <p className={style.noResults}>No Request found</p>
                }
            </div>
        </>
    )
}

export default MembershipRequestCardList