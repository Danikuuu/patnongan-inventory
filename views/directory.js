<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory</title>
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
            margin-bottom: 2px;
            padding: 5px;
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
            background-color: transparent;
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
            width: calc((100%-400px) / 7);
        }

        .fixed-width {
            width: 400px; /* Set the desired width for this column */
        }

        .btn {
            background-color: #083a3c; /* Default color for the Edit button */
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 5px;
            margin: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 10px;
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
            height: 20px;
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

        .dir-btn i {
            color: #fbad48;
        }

        .dir-btn {
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
    font-size: 12px;
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
                    <a href="/admin/dashboard" class="button das-btn"><i class="fas fa-tachometer-alt"></i> DASHBOARD</a>
                    <a href="/admin/transactions" class="button inv-btn"><i class="fas fa-box"></i> INVENTORY</a>
                    <a href="/admin/orders" class="button dir-btn"><i class="fas fa-address-book"></i> DIRECTORY</a>
                </div>
                <div class="menu-column profile-card">
                    <a href="/" class="button out-btn">Logout</a>
                </div>
            </div>
            <div class="analysis-frame">
                <div class="title-frame">
                    <span>Directory Overview</span>
                    <span>
                        <a href="/admin/accounts" class="mngbtn">Manage Users &nbsp;<i class="fas fa-cog"></i></a>
                        <button id="create" class="addbtn" onclick="openModal()">
                            New Customer <i class="fas fa-plus"></i>
                        </button>
                    </span>
                </div>
                <header>
                    <h1 class="h1a">
                        <p1 id="customerCount"><%= totalCustomersWhoOrdered %></p1>
                        <p2><i class="fas fa-database"></i> total records</p2>
                    </h1>
                    <h1>
                        <p1 id="averageSales"><%= averageSales %></p1>
                        <p2><i class="fas fa-shopping-cart"></i> average purchase</p2>
                    </h1>
                    <h1>
                        <p1 id="totalCities"><%= totalCities %></p1>
                        <p2><i class="fas fa-map"></i> city coverage</p2>
                    </h1>
                    <h1>
                        <p1 id="marketPenetration"><%= marketPenetration %>%</p1>
                        <p2><i class="fas fa-chart-bar"></i> market penetration</p2>
                    </h1>
                </header>                
                <div>
                    <hr>
                    <table>
                        <thead>
                            <tr>
                                <th>CUSTOMER NAME</th>
                                <th>ADDRESS</th>
                                <th>PURCHASE</th>
                                <th colspan="2">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <% customerSummaryArray.forEach(customerSummary => { %>
                                <tr>
                                    <td>
                                        <span class="tdHead"><%= customerSummary.customer.first_name %> <%= customerSummary.customer.last_name %></span><br>
                                        <%= customerSummary.customer.phone %> &bull; <%= customerSummary.customer.email %>
                                    </td>
                                    <td>
                                        <span class="tdHead">
                                            <%= customerSummary.customer.street_address %>, <%= customerSummary.customer.city %>, <%= customerSummary.customer.province %>
                                        </span><br>
                                        <%= customerSummary.customer.postal_code %>
                                    </td>
                                    <td>
                                        <span class="tdHead">
                                            Total: ₱<%= customerSummary.totalSpent.toFixed(2) %>
                                        </span><br>
                                        <%= customerSummary.totalOrders %> Orders
                                    </td>
                        
                                    <td>
                                        <button class="btn btn-update" 
                                                onclick="openEditModal(
                                                    '<%= customerSummary.customer._id %>', 
                                                    '<%= customerSummary.customer.first_name %>', 
                                                    '<%= customerSummary.customer.last_name %>', 
                                                    '<%= customerSummary.customer.phone %>', 
                                                    '<%= customerSummary.customer.email %>', 
                                                    '<%= customerSummary.customer.city %>', 
                                                    '<%= customerSummary.customer.province %>', 
                                                    '<%= customerSummary.customer.street_address %>', 
                                                    '<%= customerSummary.customer.postal_code %>'
                                                )">
                                            <i class="fas fa-pen icon"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <form action="/customers/<%= customerSummary.customer._id %>?_method=DELETE" method="POST" style="margin: 0;">
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

    <div id="modal-create" class="modal">
        <div class="modal-content">
            <main>
                <div class="title-frame">
                    <p class="exitbtn" onclick="closeaddModal()"><i class="fas fa-arrow-left"></i></p>
                    <span>NEW CUSTOMER</span>
                </div>
                <form action="/admin/add-customer" method="POST">

                    <div class="row">
                        <div class="field">
                            <label>First Name</label>
                            <input type="text" id="first_name" name="first_name" placeholder="" required>
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input type="text" id="last_name" name="last_name" placeholder="" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="field">
                            <label>Phone Number</label>
                            <input type="text" id="phone" name="phone" placeholder="" required>
                        </div>
                        <div class="field">
                            <label>Email Address</label>
                            <input type="email" id="email" name="email" placeholder="" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="field">
                            <label>City</label>
                        <select id="city" name="city" required>
                            <option value="">Select City</option>
                            <option value="Alaminos">Alaminos</option>
                            <option value="Amadeo">Amadeo</option>
                            <option value="Angeles">Angeles</option>
                            <option value="Antipolo">Antipolo</option>
                            <option value="Bacoor">Bacoor</option>
                            <option value="Bacolod">Bacolod</option>
                            <option value="Baguio">Baguio</option>
                            <option value="Bago">Bago</option>
                            <option value="Bais">Bais</option>
                            <option value="Balanga">Balanga</option>
                            <option value="Batac">Batac</option>
                            <option value="Batangas City">Batangas City</option>
                            <option value="Bayawan">Bayawan</option>
                            <option value="Baybay">Baybay</option>
                            <option value="Bayugan">Bayugan</option>
                            <option value="Biñan">Biñan</option>
                            <option value="Bislig">Bislig</option>
                            <option value="Bogo">Bogo</option>
                            <option value="Borongan">Borongan</option>
                            <option value="Butuan">Butuan</option>
                            <option value="Cabadbaran">Cabadbaran</option>
                            <option value="Cabanatuan">Cabanatuan</option>
                            <option value="Cabuyao">Cabuyao</option>
                            <option value="Cadiz">Cadiz</option>
                            <option value="Calamba">Calamba</option>
                            <option value="Calapan">Calapan</option>
                            <option value="Calbayog">Calbayog</option>
                            <option value="Candon">Candon</option>
                            <option value="Canlaon">Canlaon</option>
                            <option value="Carcar">Carcar</option>
                            <option value="Catbalogan">Catbalogan</option>
                            <option value="Cauayan">Cauayan</option>
                            <option value="Cebu City">Cebu City</option>
                            <option value="Caloocan">Caloocan</option>
                            <option value="Dagupan">Dagupan</option>
                            <option value="Danao">Danao</option>
                            <option value="Dapitan">Dapitan</option>
                            <option value="Dasmariñas">Dasmariñas</option>
                            <option value="Digos">Digos</option>
                            <option value="Dipolog">Dipolog</option>
                            <option value="Dumaguete">Dumaguete</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Escalante">Escalante</option>
                            <option value="Gapan">Gapan</option>
                            <option value="General Santos">General Santos</option>
                            <option value="General Trias">General Trias</option>
                            <option value="Gingoog">Gingoog</option>
                            <option value="Guihulngan">Guihulngan</option>
                            <option value="Himamaylan">Himamaylan</option>
                            <option value="Ilagan">Ilagan</option>
                            <option value="Imus">Imus</option>
                            <option value="Iriga">Iriga</option>
                            <option value="Isabela City">Isabela City</option>
                            <option value="Kabankalan">Kabankalan</option>
                            <option value="Kidapawan">Kidapawan</option>
                            <option value="Koronadal">Koronadal</option>
                            <option value="La Carlota">La Carlota</option>
                            <option value="Lamitan">Lamitan</option>
                            <option value="Laoag">Laoag</option>
                            <option value="Legazpi">Legazpi</option>
                            <option value="Ligao">Ligao</option>
                            <option value="Lipa">Lipa</option>
                            <option value="Lapu-Lapu">Lapu-Lapu</option>
                            <option value="Las Piñas">Las Piñas</option>
                            <option value="Lucena">Lucena</option>
                            <option value="Mabalacat">Mabalacat</option>
                            <option value="Maasin">Maasin</option>
                            <option value="Malabon">Malabon</option>
                            <option value="Malolos">Malolos</option>
                            <option value="Makati">Makati</option>
                            <option value="Marawi">Marawi</option>
                            <option value="Marikina">Marikina</option>
                            <option value="Mati">Mati</option>
                            <option value="Meycauayan">Meycauayan</option>
                            <option value="Muñoz">Muñoz</option>
                            <option value="Muntinlupa">Muntinlupa</option>
                            <option value="Navotas">Navotas</option>
                            <option value="Naga">Naga</option>
                            <option value="Olongapo">Olongapo</option>
                            <option value="Ormoc">Ormoc</option>
                            <option value="Ozamiz">Ozamiz</option>
                            <option value="Pagadian">Pagadian</option>
                            <option value="Palayan">Palayan</option>
                            <option value="Panabo">Panabo</option>
                            <option value="Passi">Passi</option>
                            <option value="Pasay">Pasay</option>
                            <option value="Pasig">Pasig</option>
                            <option value="Puerto Princesa">Puerto Princesa</option>
                            <option value="Quezon City">Quezon City</option>
                            <option value="Roxas City">Roxas City</option>
                            <option value="Sagay">Sagay</option>
                            <option value="Samal">Samal</option>
                            <option value="San Carlos">San Carlos</option>
                            <option value="San Fernando">San Fernando</option>
                            <option value="San Jose">San Jose</option>
                            <option value="San Jose del Monte">San Jose del Monte</option>
                            <option value="San Juan">San Juan</option>
                            <option value="San Pablo">San Pablo</option>
                            <option value="San Pedro">San Pedro</option>
                            <option value="Santa Rosa">Santa Rosa</option>
                            <option value="Santo Tomas">Santo Tomas</option>
                            <option value="Silay">Silay</option>
                            <option value="Sipalay">Sipalay</option>
                            <option value="Sorsogon City">Sorsogon City</option>
                            <option value="Surigao City">Surigao City</option>
                            <option value="Tabaco">Tabaco</option>
                            <option value="Tabuk">Tabuk</option>
                            <option value="Tacloban">Tacloban</option>
                            <option value="Tacurong">Tacurong</option>
                            <option value="Tagaytay">Tagaytay</option>
                            <option value="Tagbilaran">Tagbilaran</option>
                            <option value="Tagum">Tagum</option>
                            <option value="Talisay">Talisay</option>
                            <option value="Tanauan">Tanauan</option>
                            <option value="Tandag">Tandag</option>
                            <option value="Tangub">Tangub</option>
                            <option value="Tanjay">Tanjay</option>
                            <option value="Tarlac City">Tarlac City</option>
                            <option value="Tayabas">Tayabas</option>
                            <option value="Toledo">Toledo</option>
                            <option value="Trece Martires">Trece Martires</option>
                            <option value="Tuguegarao">Tuguegarao</option>
                            <option value="Urdaneta">Urdaneta</option>
                            <option value="Valenzuela">Valenzuela</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Victorias">Victorias</option>
                            <option value="Vigan">Vigan</option>
                            <option value="Zamboanga City">Zamboanga City</option>
                        </select>
                        </div>
                        <div class="field">
                            <label>Province</label>
                    <select id="province" name="province" required>
                        <option value="">Select Province</option>
                        <option value="Abra">Abra</option>
                        <option value="Agusan del Norte">Agusan del Norte</option>
                        <option value="Agusan del Sur">Agusan del Sur</option>
                        <option value="Aklan">Aklan</option>
                        <option value="Albay">Albay</option>
                        <option value="Antique">Antique</option>
                        <option value="Apayao">Apayao</option>
                        <option value="Aurora">Aurora</option>
                        <option value="Basilan">Basilan</option>
                        <option value="Bataan">Bataan</option>
                        <option value="Batanes">Batanes</option>
                        <option value="Batangas">Batangas</option>
                        <option value="Benguet">Benguet</option>
                        <option value="Biliran">Biliran</option>
                        <option value="Bohol">Bohol</option>
                        <option value="Bukidnon">Bukidnon</option>
                        <option value="Bulacan">Bulacan</option>
                        <option value="Cagayan">Cagayan</option>
                        <option value="Camarines Norte">Camarines Norte</option>
                        <option value="Camarines Sur">Camarines Sur</option>
                        <option value="Camiguin">Camiguin</option>
                        <option value="Capiz">Capiz</option>
                        <option value="Catanduanes">Catanduanes</option>
                        <option value="Cavite">Cavite</option>
                        <option value="Cebu">Cebu</option>
                        <option value="Cotabato">Cotabato</option>
                        <option value="Davao de Oro">Davao de Oro (Compostela Valley)</option>
                        <option value="Davao del Norte">Davao del Norte</option>
                        <option value="Davao del Sur">Davao del Sur</option>
                        <option value="Davao Occidental">Davao Occidental</option>
                        <option value="Davao Oriental">Davao Oriental</option>
                        <option value="Dinagat Islands">Dinagat Islands</option>
                        <option value="Eastern Samar">Eastern Samar</option>
                        <option value="Guimaras">Guimaras</option>
                        <option value="Ifugao">Ifugao</option>
                        <option value="Ilocos Norte">Ilocos Norte</option>
                        <option value="Ilocos Sur">Ilocos Sur</option>
                        <option value="Iloilo">Iloilo</option>
                        <option value="Isabela">Isabela</option>
                        <option value="Kalinga">Kalinga</option>
                        <option value="La Union">La Union</option>
                        <option value="Laguna">Laguna</option>
                        <option value="Lanao del Norte">Lanao del Norte</option>
                        <option value="Lanao del Sur">Lanao del Sur</option>
                        <option value="Leyte">Leyte</option>
                        <option value="Maguindanao del Norte">Maguindanao del Norte</option>
                        <option value="Maguindanao del Sur">Maguindanao del Sur</option>
                        <option value="Marinduque">Marinduque</option>
                        <option value="Masbate">Masbate</option>
                        <option value="Misamis Occidental">Misamis Occidental</option>
                        <option value="Misamis Oriental">Misamis Oriental</option>
                        <option value="Mountain Province">Mountain Province</option>
                        <option value="Negros Occidental">Negros Occidental</option>
                        <option value="Negros Oriental">Negros Oriental</option>
                        <option value="Northern Samar">Northern Samar</option>
                        <option value="Nueva Ecija">Nueva Ecija</option>
                        <option value="Nueva Vizcaya">Nueva Vizcaya</option>
                        <option value="Occidental Mindoro">Occidental Mindoro</option>
                        <option value="Oriental Mindoro">Oriental Mindoro</option>
                        <option value="Palawan">Palawan</option>
                        <option value="Pampanga">Pampanga</option>
                        <option value="Pangasinan">Pangasinan</option>
                        <option value="Quezon">Quezon</option>
                        <option value="Quirino">Quirino</option>
                        <option value="Rizal">Rizal</option>
                        <option value="Romblon">Romblon</option>
                        <option value="Samar">Samar</option>
                        <option value="Sarangani">Sarangani</option>
                        <option value="Siquijor">Siquijor</option>
                        <option value="Sorsogon">Sorsogon</option>
                        <option value="South Cotabato">South Cotabato</option>
                        <option value="Southern Leyte">Southern Leyte</option>
                        <option value="Sultan Kudarat">Sultan Kudarat</option>
                        <option value="Sulu">Sulu</option>
                        <option value="Surigao del Norte">Surigao del Norte</option>
                        <option value="Surigao del Sur">Surigao del Sur</option>
                        <option value="Tarlac">Tarlac</option>
                        <option value="Tawi-Tawi">Tawi-Tawi</option>
                        <option value="Zambales">Zambales</option>
                        <option value="Zamboanga del Norte">Zamboanga del Norte</option>
                        <option value="Zamboanga del Sur">Zamboanga del Sur</option>
                        <option value="Zamboanga Sibugay">Zamboanga Sibugay</option>
                    </select>
                    </div>
                    </div>
                    <div class="row">
                        <div class="field">
                            <label>Street & Barangay</label>
                            <input type="text" id="street_address" name="street_address" placeholder="" required>
                        </div>
                        <div class="field">
                            <label>Landmark</label>
                            <input type="text" id="postal_code" name="postal_code" placeholder="" required>
                        </div>

                    </div>
                    <div class="form-buttons">
                        <button type="reset" class="clrbtn">CLEAR</button>
                        <button type="submit" class="newbtn">+ ADD</button>
                    </div>
                </form>
            </main>
        </div>
    </div>
    <script>
        document.getElementById("create").onclick = function() {
            document.getElementById("modal-create").style.display = "block";
        };
    
        // document.getElementsByClassName("close-button")[0].onclick = function() {
        //     document.getElementById("modal-create").style.display = "none";
        // };
    
        window.onclick = function(event) {
            if (event.target === document.getElementById("modal-create")) {
                document.getElementById("modal-create").style.display = "none";
            }
        };
    </script>
    

    <div class="modal" id="editModal">
        <div class="modal-content">
            <div class="title-frame">
                <a href="/customers" class="exitbtn" onclick="closeModal()"><i class="fas fa-arrow-left"></i></a>
                <span>UPDATE RECORD</span>
            </div>
            <form id="editForm" onsubmit="submitEdit(event)">
                <input type="hidden" id="editId">
                <div class="row">
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" id="editFirstName" placeholder="">
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" id="editLastName" placeholder="">
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <label>Contact Number</label>
                        <input type="text" id="editContact" placeholder="">
                    </div>
                    <div class="field">
                        <label>Email Address</label>
                        <input type="email" id="editEmail" placeholder="">
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <label>City</label>
                    <select id="city" name="city" required>
                        <option value="">Select City</option>
                        <option value="Alaminos">Alaminos</option>
                        <option value="Amadeo">Amadeo</option>
                        <option value="Angeles">Angeles</option>
                        <option value="Antipolo">Antipolo</option>
                        <option value="Bacoor">Bacoor</option>
                        <option value="Bacolod">Bacolod</option>
                        <option value="Baguio">Baguio</option>
                        <option value="Bago">Bago</option>
                        <option value="Bais">Bais</option>
                        <option value="Balanga">Balanga</option>
                        <option value="Batac">Batac</option>
                        <option value="Batangas City">Batangas City</option>
                        <option value="Bayawan">Bayawan</option>
                        <option value="Baybay">Baybay</option>
                        <option value="Bayugan">Bayugan</option>
                        <option value="Biñan">Biñan</option>
                        <option value="Bislig">Bislig</option>
                        <option value="Bogo">Bogo</option>
                        <option value="Borongan">Borongan</option>
                        <option value="Butuan">Butuan</option>
                        <option value="Cabadbaran">Cabadbaran</option>
                        <option value="Cabanatuan">Cabanatuan</option>
                        <option value="Cabuyao">Cabuyao</option>
                        <option value="Cadiz">Cadiz</option>
                        <option value="Calamba">Calamba</option>
                        <option value="Calapan">Calapan</option>
                        <option value="Calbayog">Calbayog</option>
                        <option value="Candon">Candon</option>
                        <option value="Canlaon">Canlaon</option>
                        <option value="Carcar">Carcar</option>
                        <option value="Catbalogan">Catbalogan</option>
                        <option value="Cauayan">Cauayan</option>
                        <option value="Cebu City">Cebu City</option>
                        <option value="Caloocan">Caloocan</option>
                        <option value="Dagupan">Dagupan</option>
                        <option value="Danao">Danao</option>
                        <option value="Dapitan">Dapitan</option>
                        <option value="Dasmariñas">Dasmariñas</option>
                        <option value="Digos">Digos</option>
                        <option value="Dipolog">Dipolog</option>
                        <option value="Dumaguete">Dumaguete</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Escalante">Escalante</option>
                        <option value="Gapan">Gapan</option>
                        <option value="General Santos">General Santos</option>
                        <option value="General Trias">General Trias</option>
                        <option value="Gingoog">Gingoog</option>
                        <option value="Guihulngan">Guihulngan</option>
                        <option value="Himamaylan">Himamaylan</option>
                        <option value="Ilagan">Ilagan</option>
                        <option value="Imus">Imus</option>
                        <option value="Iriga">Iriga</option>
                        <option value="Isabela City">Isabela City</option>
                        <option value="Kabankalan">Kabankalan</option>
                        <option value="Kidapawan">Kidapawan</option>
                        <option value="Koronadal">Koronadal</option>
                        <option value="La Carlota">La Carlota</option>
                        <option value="Lamitan">Lamitan</option>
                        <option value="Laoag">Laoag</option>
                        <option value="Legazpi">Legazpi</option>
                        <option value="Ligao">Ligao</option>
                        <option value="Lipa">Lipa</option>
                        <option value="Lapu-Lapu">Lapu-Lapu</option>
                        <option value="Las Piñas">Las Piñas</option>
                        <option value="Lucena">Lucena</option>
                        <option value="Mabalacat">Mabalacat</option>
                        <option value="Maasin">Maasin</option>
                        <option value="Malabon">Malabon</option>
                        <option value="Malolos">Malolos</option>
                        <option value="Makati">Makati</option>
                        <option value="Marawi">Marawi</option>
                        <option value="Marikina">Marikina</option>
                        <option value="Mati">Mati</option>
                        <option value="Meycauayan">Meycauayan</option>
                        <option value="Muñoz">Muñoz</option>
                        <option value="Muntinlupa">Muntinlupa</option>
                        <option value="Navotas">Navotas</option>
                        <option value="Naga">Naga</option>
                        <option value="Olongapo">Olongapo</option>
                        <option value="Ormoc">Ormoc</option>
                        <option value="Ozamiz">Ozamiz</option>
                        <option value="Pagadian">Pagadian</option>
                        <option value="Palayan">Palayan</option>
                        <option value="Panabo">Panabo</option>
                        <option value="Passi">Passi</option>
                        <option value="Pasay">Pasay</option>
                        <option value="Pasig">Pasig</option>
                        <option value="Puerto Princesa">Puerto Princesa</option>
                        <option value="Quezon City">Quezon City</option>
                        <option value="Roxas City">Roxas City</option>
                        <option value="Sagay">Sagay</option>
                        <option value="Samal">Samal</option>
                        <option value="San Carlos">San Carlos</option>
                        <option value="San Fernando">San Fernando</option>
                        <option value="San Jose">San Jose</option>
                        <option value="San Jose del Monte">San Jose del Monte</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Pablo">San Pablo</option>
                        <option value="San Pedro">San Pedro</option>
                        <option value="Santa Rosa">Santa Rosa</option>
                        <option value="Santo Tomas">Santo Tomas</option>
                        <option value="Silay">Silay</option>
                        <option value="Sipalay">Sipalay</option>
                        <option value="Sorsogon City">Sorsogon City</option>
                        <option value="Surigao City">Surigao City</option>
                        <option value="Tabaco">Tabaco</option>
                        <option value="Tabuk">Tabuk</option>
                        <option value="Tacloban">Tacloban</option>
                        <option value="Tacurong">Tacurong</option>
                        <option value="Tagaytay">Tagaytay</option>
                        <option value="Tagbilaran">Tagbilaran</option>
                        <option value="Tagum">Tagum</option>
                        <option value="Talisay">Talisay</option>
                        <option value="Tanauan">Tanauan</option>
                        <option value="Tandag">Tandag</option>
                        <option value="Tangub">Tangub</option>
                        <option value="Tanjay">Tanjay</option>
                        <option value="Tarlac City">Tarlac City</option>
                        <option value="Tayabas">Tayabas</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Trece Martires">Trece Martires</option>
                        <option value="Tuguegarao">Tuguegarao</option>
                        <option value="Urdaneta">Urdaneta</option>
                        <option value="Valenzuela">Valenzuela</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Victorias">Victorias</option>
                        <option value="Vigan">Vigan</option>
                        <option value="Zamboanga City">Zamboanga City</option>
                    </select>
                    </div>
                    <div class="field">
                        <label>Province</label>
                <select id="province" name="province" required>
                    <option value="">Select Province</option>
                    <option value="Abra">Abra</option>
                    <option value="Agusan del Norte">Agusan del Norte</option>
                    <option value="Agusan del Sur">Agusan del Sur</option>
                    <option value="Aklan">Aklan</option>
                    <option value="Albay">Albay</option>
                    <option value="Antique">Antique</option>
                    <option value="Apayao">Apayao</option>
                    <option value="Aurora">Aurora</option>
                    <option value="Basilan">Basilan</option>
                    <option value="Bataan">Bataan</option>
                    <option value="Batanes">Batanes</option>
                    <option value="Batangas">Batangas</option>
                    <option value="Benguet">Benguet</option>
                    <option value="Biliran">Biliran</option>
                    <option value="Bohol">Bohol</option>
                    <option value="Bukidnon">Bukidnon</option>
                    <option value="Bulacan">Bulacan</option>
                    <option value="Cagayan">Cagayan</option>
                    <option value="Camarines Norte">Camarines Norte</option>
                    <option value="Camarines Sur">Camarines Sur</option>
                    <option value="Camiguin">Camiguin</option>
                    <option value="Capiz">Capiz</option>
                    <option value="Catanduanes">Catanduanes</option>
                    <option value="Cavite">Cavite</option>
                    <option value="Cebu">Cebu</option>
                    <option value="Cotabato">Cotabato</option>
                    <option value="Davao de Oro">Davao de Oro (Compostela Valley)</option>
                    <option value="Davao del Norte">Davao del Norte</option>
                    <option value="Davao del Sur">Davao del Sur</option>
                    <option value="Davao Occidental">Davao Occidental</option>
                    <option value="Davao Oriental">Davao Oriental</option>
                    <option value="Dinagat Islands">Dinagat Islands</option>
                    <option value="Eastern Samar">Eastern Samar</option>
                    <option value="Guimaras">Guimaras</option>
                    <option value="Ifugao">Ifugao</option>
                    <option value="Ilocos Norte">Ilocos Norte</option>
                    <option value="Ilocos Sur">Ilocos Sur</option>
                    <option value="Iloilo">Iloilo</option>
                    <option value="Isabela">Isabela</option>
                    <option value="Kalinga">Kalinga</option>
                    <option value="La Union">La Union</option>
                    <option value="Laguna">Laguna</option>
                    <option value="Lanao del Norte">Lanao del Norte</option>
                    <option value="Lanao del Sur">Lanao del Sur</option>
                    <option value="Leyte">Leyte</option>
                    <option value="Maguindanao del Norte">Maguindanao del Norte</option>
                    <option value="Maguindanao del Sur">Maguindanao del Sur</option>
                    <option value="Marinduque">Marinduque</option>
                    <option value="Masbate">Masbate</option>
                    <option value="Misamis Occidental">Misamis Occidental</option>
                    <option value="Misamis Oriental">Misamis Oriental</option>
                    <option value="Mountain Province">Mountain Province</option>
                    <option value="Negros Occidental">Negros Occidental</option>
                    <option value="Negros Oriental">Negros Oriental</option>
                    <option value="Northern Samar">Northern Samar</option>
                    <option value="Nueva Ecija">Nueva Ecija</option>
                    <option value="Nueva Vizcaya">Nueva Vizcaya</option>
                    <option value="Occidental Mindoro">Occidental Mindoro</option>
                    <option value="Oriental Mindoro">Oriental Mindoro</option>
                    <option value="Palawan">Palawan</option>
                    <option value="Pampanga">Pampanga</option>
                    <option value="Pangasinan">Pangasinan</option>
                    <option value="Quezon">Quezon</option>
                    <option value="Quirino">Quirino</option>
                    <option value="Rizal">Rizal</option>
                    <option value="Romblon">Romblon</option>
                    <option value="Samar">Samar</option>
                    <option value="Sarangani">Sarangani</option>
                    <option value="Siquijor">Siquijor</option>
                    <option value="Sorsogon">Sorsogon</option>
                    <option value="South Cotabato">South Cotabato</option>
                    <option value="Southern Leyte">Southern Leyte</option>
                    <option value="Sultan Kudarat">Sultan Kudarat</option>
                    <option value="Sulu">Sulu</option>
                    <option value="Surigao del Norte">Surigao del Norte</option>
                    <option value="Surigao del Sur">Surigao del Sur</option>
                    <option value="Tarlac">Tarlac</option>
                    <option value="Tawi-Tawi">Tawi-Tawi</option>
                    <option value="Zambales">Zambales</option>
                    <option value="Zamboanga del Norte">Zamboanga del Norte</option>
                    <option value="Zamboanga del Sur">Zamboanga del Sur</option>
                    <option value="Zamboanga Sibugay">Zamboanga Sibugay</option>
                </select>
                </div>
                </div>
                <div class="row">
                    <div class="field">
                        <label>Street & Barangay</label>
                        <input type="text" id="editStreetAddress" placeholder="">
                    </div>
                    <div class="field">
                        <label>Postal Code</label>
                        <input type="text" id="editPostalCode" placeholder="">
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
function openEditModal(id, firstName, lastName, contact, email, city, province, streetAddress, postalCode) {
    document.getElementById('editId').value = id;
    document.getElementById('editFirstName').value = firstName;
    document.getElementById('editLastName').value = lastName;
    document.getElementById('editContact').value = contact;
    document.getElementById('editEmail').value = email;
    document.getElementById('editCity').value = city;
    document.getElementById('editProvince').value = province; // Correctly set the province
    document.getElementById('editStreetAddress').value = streetAddress;
    document.getElementById('editPostalCode').value = postalCode;

    // Open modal
    document.getElementById('editModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

    
    function closeModal() {
        document.getElementById('editModal').style.display = 'none';
    }

    function closeaddModal() {
        document.getElementById('modal-create').style.display = 'none';
    }

    function submitEdit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the input fields
    const id = document.getElementById('editId').value;
    const firstName = document.getElementById('editFirstName').value;
    const lastName = document.getElementById('editLastName').value;
    const contact = document.getElementById('editContact').value;
    const email = document.getElementById('editEmail').value;
    const city = document.getElementById('editCity').value;
    const province = document.getElementById('editProvince').value;
    const streetAddress = document.getElementById('editStreetAddress').value;
    const postalCode = document.getElementById('editPostalCode').value;

    // Create an object with the data to be sent
    const data = {
        first_name: firstName,
        last_name: lastName,
        contact_number: contact,
        email_address: email,
        city: city,
        province: province,
        street_address: streetAddress,
        postal_code: postalCode,
    };

    // Make an AJAX request to update the user
    fetch(`/customers/update/${id}`, {
        method: 'PUT', // or 'POST' depending on your server setup
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            // Optionally, handle success (e.g., close modal, refresh data)
            alert('Record updated successfully');
            location.reload(); // Refresh the page or update the UI accordingly
        } else {
            // Handle error response
            alert('Failed to update record. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

    </script>
<script>
    // Assuming 'customers' is your array of customer objects
    customers.sort((a, b) => {
        const firstNameA = a.first_name.toLowerCase();
        const firstNameB = b.first_name.toLowerCase();

        // Compare first names
        if (firstNameA < firstNameB) return -1;
        if (firstNameA > firstNameB) return 1;

        // If first names are the same, compare last names
        const lastNameA = a.last_name.toLowerCase();
        const lastNameB = b.last_name.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
    });
</script>


</body>
</html>
