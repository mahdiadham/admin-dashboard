import { useMatches } from "react-router";

const useTitle = (title = "Dashboard") => {
    const matches = useMatches();

    return (
        matches
            .filter((match) => match?.handle?.crumb)
            .map((route) => route.handle.crumb)
            .join(" / ") || title
    );
};

export default useTitle;