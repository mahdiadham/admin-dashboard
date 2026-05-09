import AuthorsTable from "../../components/AuthorsTable/AuthorsTable";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";

const Tables = () => {
    return (
        <section>
            <div>
                <AuthorsTable />
            </div>
            <div className="mt-7">
                <ProjectsTable />
            </div>
        </section>
    )
}

export default Tables;
