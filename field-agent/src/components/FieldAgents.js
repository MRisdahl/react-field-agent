import { useState } from 'react';
import data from "../data";

function FieldAgents() {
    const [currentView, setCurrentView] = useState('Home');
    const [agents, setAgent] = useState(data);

    const agentListClickHandler = () => {
        setCurrentView('List');
    }

    const homeClickHandler = () => {
        setCurrentView('Home')
    }

    return (

        <div>
            {currentView === 'Home' ? (
                <div class="container">
                    <header>
                        <h1>Field Agent</h1>
                        <div>
                            Welcome username! | <a href="#">Logout</a> | <a href="login.html">Login</a> | <a
                                href="register.html">Register</a>
                        </div>
                    </header>
                    <nav>
                        <a href='#' onclick={homeClickHandler}>Home</a> | <a href="#">Agencies</a> | <a href="#">Locations</a> | <a
                            href='#' onclick={agentListClickHandler}>Agents</a> | <a href="#">Missions</a>
                    </nav>
                    <main>

                        <h2>Home</h2>

                        <section>

                            <h3>Welcome</h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor augue, semper a
                                porttitor pretium, tincidunt id nisi. Donec quis enim vel dolor blandit semper. Etiam
                                pulvinar felis ut ullamcorper imperdiet. Sed porttitor ipsum ut elementum tempor.
                                Vestibulum finibus, arcu non lacinia venenatis, sapien mi pulvinar lacus, vel dignissim
                                ipsum sapien eget felis.</p>

                            <p>Duis arcu neque, porta quis dapibus a, placerat in ex. Cras
                                efficitur consequat mi, a gravida lorem porttitor vitae. Morbi non urna est. Fusce
                                aliquam tincidunt sapien sit amet posuere. Phasellus tempor imperdiet enim vel
                                sodales. Phasellus condimentum urna nibh, sed interdum lacus interdum sed. Pellentesque
                                lorem lectus, volutpat vitae hendrerit eget, venenatis in urna. Mauris maximus
                                convallis eros vitae aliquet. Suspendisse sodales felis augue, ut malesuada quam
                                tristique congue. Pellentesque consectetur elit ut ornare iaculis.</p>

                        </section>

                        <section>

                            <h3>Featured Agents</h3>

                        </section>

                    </main>
                    <footer>
                        <section>
                            <h2>Legal Notices</h2>
                            <p>Copyright &copy; 2021 Field Agent Inc. All rights reserved | <a href="#">Privacy Policy</a></p>
                        </section>
                    </footer>
                </div>
            ) : null};



            {currentView === 'List' ? (

                <>
                    <div class="container">
                        <header>
                            <h1>Field Agent</h1>
                            <div>
                                Welcome username! | <a href="#">Logout</a> | <a href="login.html">Login</a> | <a
                                    href="register.html">Register</a>
                            </div>
                        </header>
                        <nav>
                            <a href='#' onclick={homeClickHandler}>Home</a> | <a href="#">Agencies</a> | <a href="#">Locations</a> | <a
                                href='#' onclick={agentListClickHandler}>Agents</a> | <a href="#">Missions</a>
                        </nav>
                        <main>
                            <div className="cards">

                                <div className="card">
                                    <header>
                                        <h3>Hazel C. Sauven</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1954-09-16</li>
                                        <li><span>Height in Inches:</span> 76</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Claudian C. O'Lynn</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1956-11-09</li>
                                        <li><span>Height in Inches:</span> 41</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Winn V. Puckrin</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1999-10-21</li>
                                        <li><span>Height in Inches:</span> 60</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Kiab U. Whitham</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1960-07-29</li>
                                        <li><span>Height in Inches:</span> 52</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Min E. Dearle</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1967-04-18</li>
                                        <li><span>Height in Inches:</span> 44</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Urban H. Carwithen</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> N/A</li>
                                        <li><span>Height in Inches:</span> 58</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Ulises B. Muhammad</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 2008-04-01</li>
                                        <li><span>Height in Inches:</span> 80</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                                <div className="card">
                                    <header>
                                        <h3>Phylys Y. Howitt</h3>
                                    </header>
                                    <ul>
                                        <li><span>DOB:</span> 1979-03-28</li>
                                        <li><span>Height in Inches:</span> 68</li>
                                    </ul>
                                    <footer>
                                        <div>
                                            <a href="edit-agent.html"><i class="bi bi-pencil-fill"></i> Edit</a>
                                            &nbsp;|&nbsp;
                                            <a href="delete-agent.html"><i class="bi bi-trash-fill"></i> Delete</a>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                        </main>
                        <footer>
                            <section>
                                <h2>Legal Notices</h2>
                                <p>Copyright &copy; 2021 Field Agent Inc. All rights reserved | <a href="#">Privacy Policy</a></p>
                            </section>
                        </footer>
                    </div>
                </>
            ) : null}
        </div>


    );
}

export default FieldAgents;