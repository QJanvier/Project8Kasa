import { Link } from 'react-router-dom';

const Error404 = () => {

    return (
        <div className="errorpage">
            <span className="errorpage_span">404</span>
            <p className="errorpage_text">Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/"><p className="errorpage_tohome">Retourner sur la page d&apos;accueil</p></Link>
        </div>
    )
}

export default Error404;