import Styles from './home.module.css';

const Home = () => {
    return (
        <>
            <section className={Styles.sectionHome} id='home'>
                <div className={Styles.containerHome}>
                    <div className={Styles.containerText}>
                        <h1 className={Styles.title}>Sorprende a tus invitados</h1>
                        <p>con invitaciones únicas y creativas</p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Home;
