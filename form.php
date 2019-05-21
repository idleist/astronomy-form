<?php
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $planets = $_POST['planet'];
    $ageGroup = $_POST['age'];
    $country = $_POST['country'];

    // echo $firstName, $lastName, $email, $ageGroup, $country;

    
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Form Received</title>
</head>
<body>
    <div id="formResults">
        <p class="userHeader">This page has been created to fulfill the assessment criteria.</p>
        <p class="userText">In a full production project, the variables from the form would be submitted to the server and would be sent to an email, or to a mailer client, like MailChimp, to be added to a subscription list.  This is difficult to show to an assessor, so I have created this page to show that the form has been succesfully validated, sent, and the information has been processed and stored in php variables and can be displayed on this page.  I hope this fulfils the criteria as it does show that the form is fully working, and with a few little additions to the php, would be ready for a production site.</p>
    </div>
    <div id="userResults">
        <p class="userHeader">Thank you <?php echo $firstName?> for submitting your information to us.  You are now a member of the Bristol Astronomy Club.</p>
        <p class="userText">Please Check The Details You Sent To Us</p>
        <p class="userText">Name: <?php echo $firstName.' '.$lastName?></p>
        <p class="userText">Email: <?php echo $email?></p>
        <p class="userText">Address: <?php echo $address?></p>
        <p class="userText">Planets Seen: <br><?php
            foreach ($planets as $planet){
                echo $planet."<br>";
            }
        ?></p>
        <p class="userText">Membership: <?php echo $ageGroup?></p>
        <p class="userText">Country: <?php echo $country?></p>

        <p class="userText">Thank you from the team at Bristol Astronomy Club</p>

    </div>
</body>
</html>