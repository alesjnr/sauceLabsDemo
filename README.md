<h3>
    Test Automation -
    <a href="https://www.saucedemo.com/">
        Sauce Labs Demo
    </a>
</h3>

<br/>

<table>
    <tbody>
        <tr>
            <td colspan="4" align="center">
                <strong>Login Scenarios</strong>
            </td>
        </tr>
        <tr>
            <td align="center">
                <strong>Nº</strong>
            </td>
            <td align="center">
                <strong>Type of tests</strong>
            </td>
            <td align="center">
                <strong>Test cases and steps to test</strong>
            </td>
            <td align="center">
                <strong>Status</strong>
            </td>
        </tr>
        <tr>
            <td align="center">01</td>
            <td align="center">
                Smoke
                <br/>
                Regression
            </td>
            <td>
                <p>Login successfully with valid username and password.<br/></p>
                <ul>
                    <li>Given that the user accessed the "saucedemo" system</li>
                    <li>
                        When filling in a valid username
                        <ul>
                            <li>And fill in the valid password</li>
                            <li>And click the "Login" button</li>
                        </ul>
                    </li>
                    <li>Then the system will login successfully.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">02</td>
            <td align="center">Regression</td>
            <td>
                <p>Unsuccessful login with invalid username.<br/></p>
                <ul>
                    <li>Given that the user accessed the "saucedemo" system</li>
                    <li>
                        When filling in an invalid username
                        <ul>
                            <li>And fill in the valid password</li>
                            <li>And click the "Login" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not login and will display a message that the username or password is invalid.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">03</td>
            <td align="center">Regression</td>
            <td>
                <p>Unsuccessful login with invalid password.<br/></p>
                <ul>
                    <li>Given that the user accessed the "saucedemo" system</li>
                    <li>
                        When filling in a valid username
                        <ul>
                            <li>And fill in the invalid password</li>
                            <li>And click the "Login" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not login and will display a message that the username or password is invalid.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">04</td>
            <td align="center">Regression</td>
            <td>
                <p>Unsuccessful login missing username.<br/></p>
                <ul>
                    <li>Given that the user accessed the "saucedemo" system</li>
                    <li>
                        When not filling in a username
                        <ul>
                            <li>And fill in a valid password</li>
                            <li>And click the "Login" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not perform the login and will present a required field message.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">05</td>
            <td align="center">Regression</td>
            <td>
                <p>Unsuccessful login missing password.<br/></p>
                <ul>
                    <li>Given that the user accessed the "saucedemo" system</li>
                    <li>
                        When filling in a valid username
                        <ul>
                            <li>And don't fill in a password</li>
                            <li>And click the "Login" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not perform the login and will present a required field message.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
    </tbody>
</table>

<br/>

<table>
    <tbody>
        <tr>
            <td colspan="4" align="center">
                <strong>Purchase Scenarios</strong>
            </td>
        </tr>
        <tr>
            <td align="center">
                <strong>Nº</strong>
            </td>
            <td align="center">
                <strong>Type of tests</strong>
            </td>
            <td align="center">
                <strong>Test cases and steps to test</strong>
            </td>
            <td align="center">
                <strong>Status</strong>
            </td>
        </tr>
        <tr>
            <td align="center">01</td>
            <td align="center">
                Smoke
                <br/>
                Regression
            </td>
            <td>
                <p>Buying two random items successfully.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the homepage of system "saucedemo"</li>
                    <li>
                        When the user clicks the "Add to cart" button on two products
                        <ul>
                            <li>And click on the cart</li>
                            <li>And click the "Checkout" button</li>
                            <li>And fill in the buyer information</li>
                            <li>And click the "Continue" button</li>
                            <li>And click the "Finish" button</li>
                        </ul>
                    </li>
                    <li>Then the system will successfully carry out the purchase.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">02</td>
            <td align="center">Regression</td>
            <td>
                <p>Adding two random products to cart successfully.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the homepage of system "saucedemo"</li>
                    <li>When the user clicks the "Add to cart" button on two products</li>
                    <li>Then the system will successfully add the two products to the cart.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">03</td>
            <td align="center">Regression</td>
            <td>
                <p>Removing two random products from the cart via the home page successfully.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the homepage of system "saucedemo"</li>
                    <li>
                        When he already has items in his cart
                        <ul>
                            <li>And click the "Remove" button on two products</li>
                        </ul>
                    </li>
                    <li>Then the system will successfully remove the item from the cart.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">04</td>
            <td align="center">Regression</td>
            <td>
                <p>Removing two random products from the cart via the cart screen successfully.<br/></p>
                <ul>
                    <li>Given that the user is already logged into the "saucedemo" system cart</li>
                    <li>
                        When he already has items in his cart
                        <ul>
                            <li>And click the "Remove" button on two products</li>
                        </ul>
                    </li>
                    <li>Then the system will successfully remove the item from the cart.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">05</td>
            <td align="center">Regression</td>
            <td>
                <p>Clicking the "Continue Shopping" button and returning to the home page.<br/></p>
                <ul>
                    <li>Given that the user is already logged into the "saucedemo" system cart</li>
                    <li>When the user clicks the "Continue Shopping" button</li>
                    <li>Then system will successfully redirect user to homepage.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">06</td>
            <td align="center">Regression</td>
            <td>
                <p>Clicking the "cancel" button in the buyer information screen and returning to the cart.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the buyer information screen in the "saucedemo" system cart</li>
                    <li>When the user clicks the "Cancel" button</li>
                    <li>Then system will successfully redirect user to cart.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">07</td>
            <td align="center">Regression</td>
            <td>
                <p>Clicking the "cancel" button on the order finish screen and returning to the homepage.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the order finish screen in the "saucedemo" system cart</li>
                    <li>When the user clicks the "Cancel" button</li>
                    <li>Then system will successfully redirect user to homepage.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">08</td>
            <td align="center">Regression</td>
            <td>
                <p>Dont enter buyer first name and show required field error.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the buyer information screen in the "saucedemo" system cart</li>
                    <li>
                        When not filling in the name
                        <ul>
                            <li>And fill in the last name</li>
                            <li>And fill in the postal code</li>
                            <li>And click the "Continue" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not go to the next step and present a required field message.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">09</td>
            <td align="center">Regression</td>
            <td>
                <p>Dont enter buyer last name and show required field error.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the buyer information screen in the "saucedemo" system cart</li>
                    <li>
                        When the user fills in the name
                        <ul>
                            <li>And do not fill in the last name</li>
                            <li>And fill in the postal code</li>
                            <li>And click the "Continue" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not go to the next step and present a required field message.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
        <tr>
            <td align="center">10</td>
            <td align="center">Regression</td>
            <td>
                <p>Dont enter buyer postal code and show required field error.<br/></p>
                <ul>
                    <li>Given that the user is already logged in on the buyer information screen in the "saucedemo" system cart</li>
                    <li>
                        When the user fills in the name
                        <ul>
                            <li>And fill in the last name</li>
                            <li>And do not fill in the postal code</li>
                            <li>And click the "Continue" button</li>
                        </ul>
                    </li>
                    <li>Then the system will not go to the next step and present a required field message.</li>
                </ul>
            </td>
            <td>Succeeded</td>
        </tr>
    </tbody>
</table>
