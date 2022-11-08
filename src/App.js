import './App.css';
import { Home, Tabbar, Teamwork } from './component';

const data = {
    name: "Instant collaborations for remote teams",
    exp: "All in one for your remote team chats, collaboration and track projects"
}
const teamwork = {
    name: "Your Hub for teamwork",
    exp: "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
}

function App() {
    return (
        <>
            <Tabbar />
            <div className='body'>
                <Home {...data} />
                <Teamwork />
            </div>
        </>
    )
}

export default App;
