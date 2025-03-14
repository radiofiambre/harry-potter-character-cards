import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import '../styles/CharacterDetail.scss'
import PageNotFound from './PageNotFound';

function CharacterDetail({characterInfo}) {

    const results = () => {
        if (characterInfo) {
            return <div className="CharacterDetail_body">
                <div className="CharacterDetail_container">
                    <Link to={'/'} className="CharacterDetail_linkBack">&lt; Volver</Link>
                    <article className="CharacterDetail_article">
                        <img className="CharacterDetail_img" src={characterInfo.photo}
                        alt={characterInfo.name} />
                        <div className="CharacterDetail_textContainer">
                            <img className="CharacterDetail_houseEmblem" src={characterInfo.houseEmblem} alt={characterInfo.house}/>
                            <h3>{characterInfo.name}</h3>
                            <h4>{characterInfo.alternateNames && characterInfo.alternateNames.length > 0 ? characterInfo.alternateNames.join(', ') : 'No tiene apodos'}</h4>
                            <div className="CharacterDetail_info">
                                <p>Status: <span>{characterInfo.alive ? "alive 🪄" : "dead 💀"}</span></p>
                                <p>Species: <span>{characterInfo.species}</span></p>
                                <p>Gender: <span>{characterInfo.gender}</span></p>
                                <p>House: <span>{characterInfo.house}</span></p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        } else if (characterInfo === null) {
            return <p className=".CharacterDetail_loadingText">Los detalles del personaje se están cargando</p>;
        } else if (!characterInfo){
            return <PageNotFound/>;
        }
    }

  return (
    <>
    {results()}
    </>
  )
}

CharacterDetail.propTypes = {
    characterInfo: PropTypes.object,
    id: PropTypes.string,
    photo: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    house: PropTypes.string
}

export default CharacterDetail