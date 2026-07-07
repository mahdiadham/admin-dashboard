import { useEffect } from "react";
import { useMatches } from "react-router";

const useTitle = (title = "Dashboard") => {
    const matches = useMatches();

    useEffect(() => {
        const pageTitle = matches.filter(match => match?.handle?.crumb)
        .map(route => route?.handle?.crumb)
        .join(" / ") || "Dashboard";
        
        document.title = pageTitle;
    }, [matches, title]);
}

export default useTitle;