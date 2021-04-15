export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'DefaultName'}</strong>
            <p>{props.repository?.description ?? 'Description default'}</p>

            <a href={props.repository?.link ?? '#'}>
                Acessar repositorio
            </a>
        </li>
    )
}