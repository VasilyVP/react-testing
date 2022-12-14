import { Link } from 'react-router-dom';

export default function MainPage() {

    return (
        <div data-testid='main_page'>
            <h1>Main page</h1>
            <h2>Pages:</h2>
            <ul>
                <li>
                    <Link to='/page_one' data-testid='page_one_link'>Page one</Link>
                </li>
                <li>
                    <Link to='/page_two' data-testid='page_two_link'>Page two</Link>
                </li>
            </ul>
        </div>
    )
}
