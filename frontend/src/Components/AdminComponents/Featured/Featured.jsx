import React from 'react'
import Style from './Style.module.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { PieChart, Pie } from 'recharts';

const Featured = () => {

    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];


    return (
        <div className={Style.featured}>
            <div className={Style.top}>
                <h1 className={Style.title} >Total</h1>
                <MoreVertOutlinedIcon />
            </div>
            <div className={Style.bottom}>
                <div className={Style.featuredChart}>
                    <PieChart width={250} height={250}>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#046BD2" />
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#111" label />
                    </PieChart>
                </div>
            </div>
        </div>
    )
}

export default Featured