import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({ nameUser }) => {
    const [repos, setRepos] = useState([])
    const [isDownload, setIsDownload] = useState(true)

    useEffect(() => {
        setIsDownload(true)
        fetch(`https://api.github.com/users/${nameUser}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setIsDownload(false)
                    setRepos(resJson)
                }, 3000)

            })
    }, [nameUser])
    return (
        <div className="container">
            {isDownload ? (
                <h1>Download...</h1>
            ) : (<ul className={styles.list}>
                {repos.map(repository => (
                    <li className={styles.listItem} key={repository.id}>
                        <div className={styles.itemName}><b>Name:</b>{repository.name}</div>
                        <div className={styles.itemLanguage}><b>Language:</b>{repository.language}</div>
                        <a className={styles.itemLink} href={repository.html_url} target="_blank">Visit to Github</a>
                    </li>
                ))}

            </ul>)}


        </div>
    )
}
export default ReposList