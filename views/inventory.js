<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            color: white;
        }

        .container {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
            overflow-y: auto; /* Enable vertical scrolling */
            overflow-x: hidden;
            background: linear-gradient(to bottom, #01201b, #071a19);
            padding: 15px;
            box-sizing: border-box;
            align-items: center;
            box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
        }

        .main-frame {
            display: flex;
            flex-direction: column;
            width: 90%;
            height: 95%; /* Keep this height or adjust as needed */
            background-color: transparent;
            border-radius: 15px;
            margin-bottom: 1px;
            padding: 5px;
            gap: 10px;
        }

        header {
            background-color: transparent;
            padding: 0;
            text-align: center;
            color: white;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            height: 70px;
            gap: 10px;
        }

        h1 {
            margin-top: 20px;
            background-color: white;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            line-height: 0.8em;
            padding: 0 20px;
            border-radius: 15px;
            font-size: 26px;
            color: #083a3c;
            width: 25%;
            border: 1px solid #c6c6c6;
        }

        p1 {
            font-size: 25px;
        }

        p2 {
            font-size: 12px;
            font-weight: normal;
        }

        p2 i {
            color: #fbad48;
        }

        table {
            width: 100%;
            border-collapse: separate;
            font-size: 10px;
            font-weight: normal;
            background-color: white;
            border-radius: 5px;
            border-spacing: 0;
            overflow: hidden;
            color: black;
            padding: 10px;
        }

        .tdHead {
            font-weight: bold;
            font-size: 12.5px;
        }

        .green {
            color: green;
            font-weight: bold;
        }

        td, th {
            padding: 10px 2px 10px 0;
            text-align: left;
            border-bottom: solid 0.5px rgb(174, 174, 174, 0.5);
            margin: 0;

        }

        tr {
            padding: 0;
            height: 3px;
        }

        th {
            color: #497641;
            font-weight: bold;
            width: calc((100%-320px) / 7);
        }

        .fixed-width {
            width: 320px; /* Set the desired width for this column */
        }

        .btn {
            background-color: #083a3c; /* Default color for the Edit button */
            color: white;
            padding: 10px;
            text-decoration: none;
            border-radius: 5px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            border: none; /* Remove border for a consistent look */
        }

        .btn-danger {
            background-color: transparent; /* Color for the Delete button */
        }

        .btn-update {
            background-color: transparent; /* Color for the Update button */
            padding: 10px;
            font-size: 10px;
        }

        .icon {
            color: gray;
        }

        .icon:hover {
            color: #fbad48;
        }

        .menu-frame {
            display: flex;
            height: 10%;
            background-color: transparent;
            border-radius: 10px;
        }

        .menu-column {
            flex: 1;
            padding: 5px;
            box-sizing: border-box;
        }

        .logo-card {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            font-weight: bold;
        }

        .logo-card img {
            max-height: 80%;
            object-fit: contain;
        }

        .menu-items {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .profile-card {
            background-color: transparent;
            height: 100%;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: none;
        }

        .profile-card a {
            color: white;
        }

        .profile-card a:hover {
            color: #fbad48;
        }

        .button {
            background-color: transparent;
            border: none;
            padding: 5px 15px;
            color: rgb(161, 160, 160);
            font-size: 12px;
            cursor: pointer;
            margin: 0 10px;
            text-align: center;
            transition: background-color 0.3s;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            text-decoration: none;
        }

        .button:hover {
            color: white;
        }

        .analysis-frame {
            height: 100%;
            background-color: white;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            padding: 20px 120px;
            gap: 20px;
            color: #083a3c;
            font-weight: bold;
        }

        .title-frame {
            height: 15px;
            background-color: transparent;
            padding: 8px;
            font-size: 20px;
            display: flex;
            justify-content: space-between; /* Change to space-between to position items */
            align-items: center;
            font-weight: bold;
        }

        .addbtn {
            background-color: #497641; /* Default color for the Edit button */
            color: white;
            padding: 5px 10px;
            text-decoration: none;
            border-radius: 10px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .addbtn:hover, .newbtn:hover, .clrbtn:hover, .mngbtn:hover {
            background-color: #fbad48;
        }

        .mngbtn {
            background-color: #083a3c; /* Default color for the Edit button */
            color: white;
            padding: 5px 10px;
            text-decoration: none;
            border-radius: 10px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .exitbtn:hover {
            color: #fbad48;
        }

        .inv-btn i {
            color: #fbad48;
        }

        .inv-btn {
            color: white;
        }

        .emphas {
            font-weight: bold;
        }
        
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
}

.modal-content {
    background-color: #ffffff;
    margin: 10% auto; /* Center the modal */
    padding: 20px;
    border: 1px solid #888;
    border-radius: 15px;
    width: 90%; /* Adjust as needed */
    max-width: 600px; /* Limit max width */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #083a3c;
    font-size: 8px;
    line-height: 1em;
}

.newbtn {
            background-color: #497641; /* Default color for the Edit button */
            color: white;
            padding: 5px 20px;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .clrbtn {
            background-color: orangered;
            color: white;
            padding: 5px 20px;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 12px;
            text-align: center;
            font-weight: bold;
            border: 1px solid #c6c6c6;
            font-family: 'Poppins', sans-serif;
        }

        .exitbtn {
            background-color: transparent;
            color: #083a3c;
            padding: 0;
            text-decoration: none;
            border-radius: 12px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 20px;
            text-align: center;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
        }


        form {
            display: flex;
            flex-direction: column;
            align-items: stretch; /* Make form elements take full width */
            font-family: 'Poppins', sans-serif;
            color: black;
            margin-top: 20px;
            font-size: 12px;
        }
        .form-buttons {
            display: flex;
            justify-content: flex-end; /* Space evenly bet*/
            font-family: 'Poppins', sans-serif;
            margin-top: 10px; /* Space above the buttons */
        }
        .row {
            display: flex;
            margin-bottom: 10px; /* Space between rows */
            gap: 10px;
        }
        .field input,
        .field select {
            flex: 1; /* Allow inputs to grow */
            margin-right: 5px; /* Space between inputs */
            padding: 8px; /* Reduce padding for smaller inputs */
            border: 1px solid #888;
            border-radius: 5px;
            background-color: transparent;
            color: black;
            font-size: 14px; /* Font size for input */
            font-family: 'Poppins', sans-serif;
        }

        .field label {
            flex: 1; /* Allow inputs to grow */
            margin-right: 5px; /* Space between inputs */
            padding: 8px; /* Reduce padding for smaller inputs */
            background-color: transparent;
            color: #888;
            font-size: 14px; /* Font size for input */
            font-family: 'Poppins', sans-serif;
        }
        .field input:last-child,
        .field select:last-child {
            margin-right: 0; /* Remove margin from the last input in the row */
            border: 1px solid #888;
        }

        .field {
            flex: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: left;
            line-height: 0.5em;
        }

        .populate {
            flex: 1; /* Allow inputs to grow */
            margin-right: 5px; /* Space between inputs */
            padding: 8px; /* Reduce padding for smaller inputs */
            border: 1px solid black;
            border-radius: 5px;
            background-color: transparent;
            color: black;
            font-size: 14px; /* Font size for input */
            font-family: 'Poppins', sans-serif;
        }
        /* Dropdown styling */
select {
    appearance: none; /* Remove default dropdown styling */
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" %3E%3Cpolyline points="6 9 12 15 18 9" /%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    font-family: 'Poppins', sans-serif;
    color: black; /* Change text color to black */
    border: 1px solid #888;
}

        /* Custom scrollbar styling */
        select::-webkit-scrollbar {
            width: 8px; /* Width of the scrollbar */
        }
        select::-webkit-scrollbar-track {
            background: transparent; /* Background of the scrollbar track */
        }
        select::-webkit-scrollbar-thumb {
            background: #555; /* Color of the scrollbar thumb */
            border-radius: 5px; /* Rounded corners for thumb */
        }
        select::-webkit-scrollbar-thumb:hover {
            background: #777; /* Color of the scrollbar thumb on hover */
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="main-frame">
            <div class="menu-frame">
                <div class="menu-column logo-card">
                    <img src="/public/images/logo.png" alt="Logo">
                    PDELSYS
                </div>
                <div class="menu-column menu-items">
                    <a href="/dashboard" class="button das-btn"><i class="fas fa-tachometer-alt"></i> DASHBOARD</a>
                    <a href="/inventory" class="button inv-btn"><i class="fas fa-box"></i> INVENTORY</a>
                    <a href="/directory" class="button dir-btn"><i class="fas fa-address-book"></i> DIRECTORY</a>
                </div>
                <div class="menu-column profile-card">
                    <a href="/welcome" class="button out-btn">Logout</a>
                </div>
            </div>
            <div class="analysis-frame">
                <div class="title-frame">
                    <span>Delivery Management</span>
                    <span>
                        <a href="/stocks" class="mngbtn">Manage Stocks &nbsp;<i class="fas fa-cog"></i></a>
                    <button id="addTransactionBtn" class="addbtn" onclick="openModal()">
                        New Order <i class="fas fa-plus"></i>
                    </button></span>
                </div>
                <header>
                    <h1>
                        <span id="totalOrdersCount"><%= orders.length %></span>
                        <p2><i class="fas fa-shopping-cart"></i> total orders</p2>
                    </h1>
                    <h1>
                        <span id="pendingCount"><%= orders.filter(o => o.status === 'pending').length %></span>
                        <p2><i class="fas fa-hourglass-half"></i> pending</p2>
                    </h1>
                    <h1>
                        <span id="deliveredCount"><%= orders.filter(o => o.status === 'delivered').length %></span>
                        <p2><i class="fas fa-check-circle"></i> delivered</p2>
                    </h1>
                    <h1>
                        <span id="cancelledCount"><%= orders.filter(o => o.status === 'cancelled').length %></span>
                        <p2><i class="fas fa-times-circle"></i> cancelled</p2>
                    </h1>
                </header>
                <div>
                    <hr>
                    <table>
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th class="fixed-width">Ordered By</th>
                                <th>Purchase</th>
                                <th>Dispatch</th>
                                <th>Delivered By</th>
                                <th  colspan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <% orders.forEach(order => { %>
                                <tr>
                                    <td><span class="tdHead"><%= order.tr %><br></span>
                                    <span class="green"><%= order.placed ? new Date(order.placed).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A' %></span></td>
                                    <td>
                                        <span class="tdHead"><%= order.customer_name %></span><br><%= order.address %>
                                    </td>
                                    <td><span class="tdHead"><%= order.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) %></span><br>
                                        <%= order.qty ? `${order.qty} Item${order.qty > 1 ? 's' : ''}` : '' %></td>
                                    <td>
                                        <% if (order.dispatch) { %>
                                            <span style="color: green;">
                                                <%= new Date(order.dispatch).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) %>
                                            </span>
                                        <% } else { %>
                                            <span style="color: gray;">Preparing</span>
                                        <% } %>
                                    </td>
                                    <td><span class="tdHead"><%= order.courier || 'N/A' %></span><br>
                                        <% if (!order.status) { %>
                                            <span>Pending</span>
                                        <% } else if (order.status === 'cancelled') { %>
                                            <span style="color: red;"><%= order.status %></span>
                                        <% } else if (order.status === 'delivered') { %>
                                            <span style="color: green;"><%= order.status %></span>
                                        <% } else { %>
                                            <span><%= order.status %></span>
                                        <% } %>
                                        <% if (order.delivered) { %>
                                            &bull; <span style="color: green;">
                                                <%= new Date(order.delivered).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) %>
                                            </span>
                                        <% } %>
                                    </td>
                                    <td>
                                        <a onclick="openEditModal(
                                            '<%= order.transaction_id %>', 
                                            '<%= order.amount %>', 
                                            '<%= order.qty %>', 
                                            '<%= order.customer_name %>', 
                                            '<%= order.address %>', 
                                            '<%= order.dispatch ? new Date(order.dispatch).toISOString(): ',' %>', 
                                            '<%= order.delivered ? new Date(order.delivered).toISOString(): ',' %>', 
                                            '<%= order.status %>'
                                        )">
                                            <i class="fas fa-pen icon"></i>
                                        </a>                                   
                                    </td>
                                    <td>
                                        <form action="/transactions/<%= order.transaction_id %>?_method=DELETE" method="POST" style="margin: 0;">
                                            <button type="submit" class="btn btn-danger">
                                                <i class="fas fa-trash-alt icon"></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            <% }) %>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

<!-- The Modal -->
<!-- Modal HTML -->
<div id="modal" class="modal">
    <div class="modal-content">
        <div class="title-frame">
            <a onclick="closeModal()" class="exitbtn"><i class="fas fa-arrow-left"></i></a>
            <span>NEW DELIVERY</span>
        </div>
        <form id="transactionForm" action="/transactions" method="POST">
            <div class="row">
                <div class="field">
                    <label>Choose Customer</label>
                    <select class="populate" id="customerSelect" onchange="populateFields()" required>
                        <option value="">Customer's List</option>
                        <% customers.forEach(customer => { %>
                            <option value="<%= customer.customer_id %>" 
                                    data-name="<%= customer.first_name + ' ' + customer.last_name %>" 
                                    data-address="<%= customer.street_address + ', ' + customer.city + ', ' + customer.province %>">
                                <%= customer.first_name + ' ' + customer.last_name %>
                            </option>
                        <% }) %>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <input type="hidden" id="customerName" name="customerName" readonly>
                </div>
                <div class="field">
                    <input type="hidden" id="address" name="address" readonly>
                </div>
            </div>
            <div class="row">
                <input type="hidden" id="status" name="status" value="Pending">
            </div>
            <div class="row">
                <div class="field">
                    <label for="quantity">Quantity</label>
                    <input type="number" id="quantity" name="quantity" required>
                </div>
                <div class="field">
                    <label for="amount">Amount</label>
                    <input type="number" id="amount" name="amount" required>
                </div>
                <div class="field">
                    <label for="courier">Courier</label>
                    <select id="courier" name="courier" required>
                        <option value="">Select Courier</option>
                        <option value="In-House">In-House</option>
                        <option value="Third-Party">Third-Party</option>
                    </select>
                </div>
            </div>
            <div class="form-buttons">
                <button type="reset" class="clrbtn">CLEAR</button>
                <button type="submit" class="newbtn">+ ADD</button>
            </div>
        </form>
    </div>
</div>


<script>
    function openModal() {
        document.querySelector(".modal").style.display = "block";
    }

    function closeModal() {
        document.querySelector(".modal").style.display = "none";
    }

    function populateFields() {
        const select = document.getElementById("customerSelect");
        const selectedOption = select.options[select.selectedIndex];
        const customerName = selectedOption.getAttribute("data-name");
        const customerAddress = selectedOption.getAttribute("data-address");

        document.getElementById("customerName").value = customerName || '';
        document.getElementById("address").value = customerAddress || '';
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('transactionForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Validate required fields
            const requiredFields = [
                "customerName", 
                "address", 
                "quantity", 
                "amount", 
                "courier"
            ];

            for (const field of requiredFields) {
                if (!document.getElementById(field).value) {
                    alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
                    return;
                }
            }

            const transactionData = {
                tr: "AUTO_GENERATED_TR_NO", // Update this according to your needs
                status: document.getElementById("status").value,
                customer_name: document.getElementById("customerName").value,
                address: document.getElementById("address").value,
                qty: document.getElementById("quantity").value,
                amount: document.getElementById("amount").value,
                dispatch: null,
                courier: document.getElementById("courier").value,
                delivered: null
            };

            fetch('/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Ensure server returns JSON
            })
            .then(data => {
                closeModal(); // Close modal on success
                fetchUpdatedTransactions(); // Refresh transactions
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });

    function fetchUpdatedTransactions() {
        fetch('/inventory') // Adjust endpoint as needed to fetch updated data
            .then(response => response.json())
            .then(data => {
                // Update your transactions table with new data
                // Assuming you have a function to update the table
                updateTransactionTable(data);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }

    function updateTransactionTable(transactions) {
        const tableBody = document.querySelector('tbody'); // Adjust selector as needed
        tableBody.innerHTML = ''; // Clear existing rows

        transactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.tr}</td>
                <td>${transaction.customer_name}</td>
                <td>${transaction.address}</td>
                <td>${transaction.qty}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>${transaction.placed ? new Date(transaction.placed).toLocaleString() : 'N/A'}</td>
                <td>${transaction.dispatch ? new Date(transaction.dispatch).toLocaleString() : 'N/A'}</td>
                <td>${transaction.courier || 'N/A'}</td>
                <td>${transaction.delivered ? new Date(transaction.delivered).toLocaleString() : 'N/A'}</td>
                <td>${transaction.status}</td>
                <td>
                    <a><i class="fas fa-pen icon"></i></a>
                    <form action="" method="" style="margin: 0;">
                        <button type="submit" class="btn btn-danger">
                            <i class="fas fa-trash-alt icon"></i>
                        </button>
                    </form>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
</script>

<!-- Edit Modal -->
<!-- Edit Modal -->
<div class="modal" id="editModal">
    <div class="modal-content">
        <div class="title-frame">
            <a onclick="closeEditModal()" class="exitbtn"><i class="fas fa-arrow-left"></i></a>
            <span>UPDATE DELIVERY</span>
        </div>
        <form id="editForm" action="" method="POST">
            <input type="hidden" name="_method" value="PUT">
            <div class="row">
                <div class="field">
                    <label for="customer_name">Customer Name:</label>
                    <input type="text" name="customer_name" id="customer_name" required>
                </div>
                <div class="field">
                    <label for="address">Address:</label>
                    <input type="text" name="address" id="address" required>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="qty">Quantity:</label>
                    <input type="number" name="qty" id="qty" required>
                </div>
                <div class="field">
                    <label for="amount">Amount:</label>
                    <input type="number" name="amount" id="amount" required>
                </div>
            </div>
            
            <div class="row">
                <div class="field">
                    <label for="dispatch">Dispatch Date:</label>
                    <input type="date" name="dispatch" id="dispatch">
                </div>
                <div class="field">
                    <label for="status">Status:</label>
                    <select name="status" id="status" required>
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <div class="field">
                    <label for="delivered">Delivered Date:</label>
                    <input type="date" name="delivered" id="delivered">
                </div>
            </div>
            <div class="form-buttons">
                <button type="reset" class="clrbtn">CLEAR</button>
                <button type="submit" class="newbtn">SAVE</button>
            </div>
        </form>
    </div>
</div>


<script>
function openEditModal(transactionId, amount, qty, customerName, address, dispatch, delivered, status) {
    document.getElementById('editForm').action = `/transactions/${transactionId}`;
    document.getElementById('amount').value = amount;
    document.getElementById('qty').value = qty;
    document.getElementById('customer_name').value = customerName;
    document.getElementById('address').value = address;

    // Format dates for input
    document.getElementById('dispatch').value = dispatch ? new Date(dispatch).toISOString().split('T')[0] : ''; 
    document.getElementById('delivered').value = delivered ? new Date(delivered).toISOString().split('T')[0] : ''; 

    document.getElementById('status').value = status;

    document.getElementById('editModal').style.display = "block";
}



function closeEditModal() {
    document.getElementById('editModal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target == modal) {
        closeEditModal();
    }
}
</script> 



</body>

</html>
