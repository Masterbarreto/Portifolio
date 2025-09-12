import type { TimelineEvent } from "@/lib/types";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
      {events.map((event, index) => (
        <div key={index} className="relative flex items-center mb-12">
          <div className={`w-1/2 pr-8 text-right ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
            <p className="text-sm font-semibold text-primary">{event.year}</p>
            <h3 className="text-lg font-bold font-headline mt-1">{event.title}</h3>
            <p className="text-sm text-muted-foreground italic">{event.institution}</p>
            <p className="text-sm mt-2">{event.description}</p>
          </div>
          <div className="order-2 flex-shrink-0">
            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
          </div>
          <div className={`w-1/2 pl-8 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
            {/* Empty div for spacing */}
          </div>
        </div>
      ))}
    </div>
  );
}
