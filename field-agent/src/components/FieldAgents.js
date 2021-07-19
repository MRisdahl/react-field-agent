import { useState } from 'react';
import data from "../data";

function FieldAgents() {
    const [currentView, setCurrentView] = useState('Home');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [editAgentId, setEditAgentId] = useState(0);
    const [heightInInches, setHeightInInches] = useState('');
    const [agents, setAgents] = useState(data);


    const resetForm = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setDob('');
        setHeightInInches('');
    }

    const firstNameOnChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const middleNameOnChangeHandler = (event) => {
        setMiddleName(event.target.value);
    }

    const lastNameOnChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const dobOnChangeHandler = (event) => {
        setDob(event.target.value);
    }

    const heightInInchesOnChangeHandler = (event) => {
        setHeightInInches(event.target.value);
    }

    const addAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const nextId = agents.length > 0 ? Math.max(...agents.map(m => m.agentId)) + 1 : 1;

        const newAgent = {
            agentId: nextId,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches,
            aliases: [],
            agencies: []
        };


        setAgents([...agents, newAgent]);

        resetForm();

        setCurrentView('List');

    }

    const editAgentFormSubmitHandler = (event) => {
        event.preventDefault();

        const newAgent = {
            id: editAgentId,
            firstName,
            middleName,
            lastName,
            dob,
            heightInInches,
            aliases: [],
            agencies: []
        };

        const newAgents = [...agents];

        const newAgentIndex = newAgents.findIndex(agent => agent.agentId === editAgentId);

        newAgents[newAgentIndex] = newAgent;

        setAgents(newAgents);

        resetForm();

        setCurrentView('List')
    }

    const agentEditClickHandler = (agentId) => {
        setEditAgentId(agentId);

        const editAgent = agents.find(agent => agent.agentId === agentId);

        setFirstName(editAgent.firstName);
        setMiddleName(editAgent.middleName);
        setLastName(editAgent.lastName);
        setDob(editAgent.dob);
        setHeightInInches(editAgent.heightInInches);

        setCurrentView('Edit');
    }

    const agentDeleteClickHandler = (agentId) => {

        setAgents(agents.filter(agent => agent.id !== agentId));

    };

    const addAgentClickHandler = () => { setCurrentView('Add') }

    const agentListClickHandler = () => { setCurrentView('List'); }

    const homeClickHandler = () => { setCurrentView('Home') }

    return (

        <div>
            {currentView === 'Add' ? (
                <div class="container">
                    <header>
                        <h1>Field Agent</h1>
                        <div>
                            Welcome username! | <a href="#">Logout</a> | <a href="login.html">Login</a> | <a
                                href="register.html">Register</a>
                        </div>
                    </header>
                    <nav>
                        <div>
                            <button type="button" onClick={homeClickHandler} >Home</button> | <a href="#">Agencies</a> | <a href="#">Locations</a> |
                            <button type="button" onClick={agentListClickHandler}>Agents</button> | <a href="#">Missions</a>
                        </div>
                    </nav>
                    <main>

                        <h2>Add Agent</h2>

                        <form onSubmit={addAgentFormSubmitHandler}>

                            <div className="field">
                                <label for="firstName">First Name:</label>
                                <input id="firstName" name="firstName" type="text" value={firstName} onChange={firstNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="middleName">Middle Name:</label>
                                <input id="middleName" name="middleName" type="text" value={middleName} onChange={middleNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="lastName">Last Name:</label>
                                <input id="lastName" name="lastName" type="text" value={lastName} onChange={lastNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="dob">DOB:</label>
                                <input id="dob" name="dob" type="date" value={dob} onChange={dobOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="heightInInches">Height in Inches:</label>
                                <input id="heightInInches" name="heightInInches" type="number" min="0" max="200" value={heightInInches} onChange={heightInInchesOnChangeHandler}></input>
                            </div>

                            <button><i className="fas fa-plus-circle"></i> Add Agent</button>

                        </form>

                        <a href="agents.html">Cancel</a>

                    </main>
                    <footer>
                        <section>
                            <h2>Legal Notices</h2>
                            <p>Copyright &copy; 2021 Field Agent Inc. All rights reserved | <a href="#">Privacy Policy</a></p>
                        </section>
                    </footer>
                </div>
            ) : null}

            {currentView === 'Edit' ? (
                <div class="container">
                    <header>
                        <h1>Field Agent</h1>
                        <div>
                            Welcome username! | <a href="#">Logout</a> | <a href="login.html">Login</a> | <a
                                href="register.html">Register</a>
                        </div>
                    </header>
                    <nav>
                        <div>
                            <button type="button" onClick={homeClickHandler} >Home</button> | <a href="#">Agencies</a> | <a href="#">Locations</a> |
                            <button type="button" onClick={agentListClickHandler}>Agents</button> | <a href="#">Missions</a>
                        </div>
                    </nav>
                    <main>

                        <h2>Edit Agent</h2>

                        <form onSubmit={editAgentFormSubmitHandler}>

                            <div className="field">
                                <label for="firstName">First Name:</label>
                                <input id="firstName" name="firstName" type="text" value={firstName} onChange={firstNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="middleName">Middle Name:</label>
                                <input id="middleName" name="middleName" type="text" value={middleName} onChange={middleNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="lastName">Last Name:</label>
                                <input id="lastName" name="lastName" type="text" value={lastName} onChange={lastNameOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="dob">DOB:</label>
                                <input id="dob" name="dob" type="date" value={dob} onChange={dobOnChangeHandler}></input>
                            </div>

                            <div className="field">
                                <label for="heightInInches">Height in Inches:</label>
                                <input id="heightInInches" name="heightInInches" type="number" min="0" max="200" value={heightInInches} onChange={heightInInchesOnChangeHandler}></input>
                            </div>

                            <button type="submit">Update Agent</button>

                        </form>

                        <a href="agents.html">Cancel</a>

                    </main>
                    <footer>
                        <section>
                            <h2>Legal Notices</h2>
                            <p>Copyright &copy; 2021 Field Agent Inc. All rights reserved | <a href="#">Privacy Policy</a></p>
                        </section>
                    </footer>
                </div>
            ) : null}

            {currentView === 'Home' ? (
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
                            <div>
                                <button type="button" onClick={homeClickHandler} >Home</button> | <a href="#">Agencies</a> | <a href="#">Locations</a> |
                                <button type="button" onClick={agentListClickHandler}>Agents</button> | <a href="#">Missions</a>
                            </div>
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
                </>
            ) : null}

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
                        <div>
                            <button type="button" onClick={homeClickHandler} >Home</button> | <a href="#">Agencies</a> | <a href="#">Locations</a> |
                            <button type="button" onClick={agentListClickHandler}>Agents</button> | <a href="#">Missions</a>
                        </div>
                        </nav>
                        <main>
                            <h2>Agents</h2>
                            <button type="button" onClick={addAgentClickHandler} >Add Agent</button>
                            <div className="cards">
                                {agents.map(agent => (
                                    <div className="card">
                                        <header>
                                            <h3>{agent.firstName} {agent.middleName} {agent.lastName}</h3>
                                        </header>
                                        <ul>
                                            <li><span>DOB:</span> {agent.dob}</li>
                                            <li><span>Height in Inches:</span> {agent.heightInInches}</li>
                                        </ul>
                                        <footer>
                                            <div>
                                                <button onClick={() => agentEditClickHandler(agent.agentId)}><i class="bi bi-pencil-fill"></i> Edit</button>
                                                &nbsp;|&nbsp;
                                                <button onClick={() => agentDeleteClickHandler(agent.agentId)}><i class="bi bi-trash-fill"></i> Delete</button>
                                            </div>
                                        </footer>
                                    </div>
                                ))}
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