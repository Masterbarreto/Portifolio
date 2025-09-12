'use client';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const ContributionHeatmap = () => {
    const [days, setDays] = useState<{ level: number; date: string }[]>([]);

    useEffect(() => {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 365);
        
        const dayArray = [];
        let currentDate = new Date(startDate);
        
        // Align to the nearest Sunday
        while (currentDate.getDay() !== 0) {
            currentDate.setDate(currentDate.getDate() - 1);
        }

        for (let i = 0; i < 53 * 7; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i);
            if (date > endDate) break;

            const level = Math.floor(Math.random() * 5); // Random level from 0 to 4
            dayArray.push({
                level,
                date: date.toISOString().split('T')[0],
            });
        }
        setDays(dayArray);
    }, []);

    const getColor = (level: number) => {
        switch (level) {
            case 0: return 'bg-gray-800';
            case 1: return 'bg-green-900';
            case 2: return 'bg-green-700';
            case 3: return 'bg-green-500';
            case 4: return 'bg-primary/80';
            default: return 'bg-gray-800';
        }
    };

    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    // Create month labels
    const monthLabels = [];
    let lastMonth = -1;

    for (let i = 0; i < 53; i++) {
        const dayIndex = i * 7;
        if (days[dayIndex]) {
            const date = new Date(days[dayIndex].date);
            const month = date.getMonth();
            if (month !== lastMonth) {
                monthLabels.push({ name: months[month], weekIndex: i });
                lastMonth = month;
            }
        }
    }


    return (
        <TooltipProvider>
            <div className="flex gap-2 text-xs text-muted-foreground overflow-x-auto p-2">
                <div className="flex flex-col gap-[2px] mt-4">
                    {weekDays.map((day, i) => ( i % 2 !== 0 &&
                        <div key={day} className="h-[10px] w-8 text-right">{day}</div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-[2px] h-4">
                        {monthLabels.map(label => (
                             <div key={label.name} style={{ marginLeft: `${label.weekIndex === 0 ? 0 : (12)}px` }}>{label.name}</div>
                        ))}
                    </div>
                    <div className="grid grid-flow-col grid-rows-7 gap-[2px]">
                        {days.map((day, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger>
                                    <div className={`w-[10px] h-[10px] rounded-sm ${getColor(day.level)}`}></div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{`${Math.floor(Math.random() * 15)} contribuições em ${day.date}`}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
};

export default ContributionHeatmap;
