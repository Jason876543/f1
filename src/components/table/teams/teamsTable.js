
"use client"
import DataTable from 'react-data-table-component';
import { useGetTeamsRankingsQuery } from '@/redux/api';
import Skeleton from 'react-loading-skeleton';

const columns = [
    {
        name: 'position',
        selector: row => row.position,
        sortable: true,
    },
    {
        name: 'team',
        selector: row => row.team.name,
        sortable: true,
    },
    {
        name: 'logo',
        selector: row => row.team.logo,
        cell: (row) => <img src={row.team.logo} alt="logo" style={{ width: '32px' }}/>
    },
    {
        name: 'points',
        selector: row => row.points,
    }    
];



export default function TeamsTable({season}) { 

    const { data, isLoading, isError } = useGetTeamsRankingsQuery(season);
    if(isError){
        return <div>Error fetching team rankings</div>
    }

    return  isLoading? <Skeleton/> : <DataTable columns={columns} data={data.rankings}/>;

};