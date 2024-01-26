import "./RepositoryCard.scss";

export default function RepositoryCard(){
    return(
        <section className="repository-card">
            <h4>.github</h4>
            <p>Community health files for the @Github organization</p>
            <div>
                <span>2, 369</span>
                <span>703</span>
                <span>updated 4 days ago</span>
            </div>
        </section>
    )
}