import {
    format,
    isPast,
    isThisYear,
    isToday,
    differenceInDays,
    startOfDay,
} from "date-fns";

function formatDistanceCustom(date: Date, itemDue: Element): string {
    const now = new Date();
    const today = startOfDay(now);
    const diffInDays = Math.abs(differenceInDays(today, date));

    if (isToday(date) || isPast(date)) {
        itemDue.classList.add("overdue");
    }

    if (isToday(date)) {
        return "Today";
    } else if (diffInDays <= 14) {
        return `${diffInDays}${isPast(date) ? "d ago" : "d"}`;
    } else if (isThisYear(date)) {
        return format(date, "d/M");
    } else {
        return format(date, "yyyy");
    }
}

export default formatDistanceCustom;
