<?php 
$connect = new mysqli("localhost","root","","macathon");
if (isset($_POST['attendee'])) {
    $name = $_POST['name0'];
    $phone = $_POST['phone0'];
    $email = $_POST['email0'];
    if( $_POST['university0']=='Other'){
        $university = $_POST['university00'];
    }else{
        $university = $_POST['university0'];
    }
    $faculty = $_POST['faculty0'];
    $department = $_POST['department0'];
    $grad_year = $_POST['grad_year0'];
$insert_attendee = "INSERT INTO audiance(Name,Phone,Email,University,Faculty,Department,Graduation_Year) 
values('$name','$phone','$email','$university','$faculty','$department','$grad_year') ";
$record2 = $connect->query("SELECT Email FROM audiance WHERE Email='$email'");
if ($record2->num_rows != 0)
  echo "<script> alert('Oops!, This Email is already Exist!');  window.location.href='form.php';</script>";
if($connect->query($insert_attendee))
   echo "<script> window.location.href='main.html';</script>";
} 


elseif(isset($_POST['individual'])){
    $name = $_POST['name1'];
    $phone = $_POST['phone1'];
    $email = $_POST['email1'];
    if( $_POST['university1']=='Other'){
        $university = $_POST['university11'];
    }else{
        $university = $_POST['university1'];
    }
    $faculty = $_POST['faculty1'];
    $department = $_POST['department1'];
    $grad_year = $_POST['grad_year1'];
    $cv = $_POST['cv1'];

$record2 = $connect->query("SELECT Email FROM individual_member WHERE Email='$email'");
if ($record2->num_rows != 0)
  echo "<script> alert('Oops!, This Email is already Exist!');  window.location.href='form.php';</script>";
$insert_individual = "INSERT INTO individual_member(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV) 
values('$name','$phone','$email','$university','$faculty','$department','$grad_year','$cv') ";
if($connect->query($insert_individual))
   echo "<script> window.location.href='main.html';</script>";
    
}

elseif(isset($_POST['team_members'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    if( $_POST['university']=='Other'){
        $university = $_POST['universityy'];
    }else{
        $university = $_POST['university'];
    }
    $faculty = $_POST['faculty'];
    $department = $_POST['department'];
    $grad_year = $_POST['grad_year'];
    $cv = $_POST['cv'];
    $team_no = $_POST['team_size'];
    $team_name = $_POST['team_name'];

   $record1 = $connect->query("SELECT Email FROM team_leaders WHERE Email='$email'");
   if ($record1->num_rows != 0)
     echo "<script> alert('Oops!, This Email is already Exist!');  window.location.href='form.php';</script>";   
    $insert_teamleaders = "INSERT INTO team_leaders(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_name,Team_no) 
    values('$name','$phone','$email','$university','$faculty','$department','$grad_year','$cv',$team_name,$team_no) ";

    $connect->query($insert_teamleaders);


        // echo $_POST['team_size'];
    if ($_POST['team_size']=='2'){
        $name5 = $_POST['name5'];
        $phone5 = $_POST['phone5'];
        $email5 = $_POST['email5'];
        if( $_POST['university5']=='Other'){
            $university5 = $_POST['university55'];
        }else{
            $university5 = $_POST['university5'];
        }
        $faculty5 = $_POST['faculty5'];
        $department5 = $_POST['department5'];
        $grad_year5 = $_POST['grad_year5'];
        $cv5 = $_POST['cv5'];
        $email_leader = $_POST['email'];
        $record2 = $connect->query("SELECT Email FROM team_members WHERE Email='$email5'");
        if ($record2->num_rows != 0 )
               echo "<script> alert('Oops!, This Email is already Exist!');  window.location.href='form.php';</script>";
        $insert_member2 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
        values('$name5','$phone5','$email5','$university5','$faculty5','$department5','$grad_year5','$cv5','$email_leader') ";

    // echo $insert_member2;
    if($connect->query($insert_member2)
        echo "<script> window.location.href='main.html';</script>"; 
    }
    elseif ($_POST['team_size']== '3' ){
        $name2 = $_POST['name2'];
        $phone2 = $_POST['phone2'];
        $email2 = $_POST['email2'];
        if( $_POST['university2']=='Other'){
            $university2 = $_POST['university22'];
        }else{
            $university2 = $_POST['university2'];
        }
        $faculty2 = $_POST['faculty2'];
        $department2 = $_POST['department2'];
        $grad_year2 = $_POST['grad_year2'];
        $cv2 = $_POST['cv2'];
        $name5 = $_POST['name5'];
        $phone5 = $_POST['phone5'];
        $email5 = $_POST['email5'];
        if( $_POST['university5']=='Other'){
            $university5 = $_POST['university55'];
        }else{
            $university5 = $_POST['university5'];
        }
        $faculty5 = $_POST['faculty5'];
        $department5 = $_POST['department5'];
        $grad_year5 = $_POST['grad_year5'];
        $cv5 = $_POST['cv5'];

        $email_leader = $_POST['email'];
        $record2 = $connect->query("SELECT Email FROM team_members WHERE Email='$email2'");
        $record3 = $connect->query("SELECT Email FROM team_members WHERE Email='$email5'");
        if ($record2->num_rows != 0 || $record3->num_rows != 0)
           echo "<script> alert('Oops!, One of the two mails you have entered Existed already!');  window.location.href='form.php';</script>";
    $insert_member2 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name2','$phone2','$email2','$university2','$faculty2','$department2','$grad_year2','$cv2','$email_leader') ";
    $insert_member4 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name5','$phone5','$email5','$university5','$faculty5','$department5','$grad_year5','$cv5','$email_leader') ";

    $connect->query($insert_member2);
    if($connect->query($insert_member4))
       echo "<script> window.location.href='main.html';</script>";
    }
    elseif ($_POST['team_size']== '4' ){
        $name2 = $_POST['name2'];
        $phone2 = $_POST['phone2'];
        $email2 = $_POST['email2'];
        if( $_POST['university2']=='Other'){
            $university2 = $_POST['university22'];
        }else{
            $university2 = $_POST['university2'];
        }
        $faculty2 = $_POST['faculty2'];
        $department2 = $_POST['department2'];
        $grad_year2 = $_POST['grad_year2'];
        $cv2 = $_POST['cv2'];
        $name3 = $_POST['name3'];
        $phone3 = $_POST['phone3'];
        $email3 = $_POST['email3'];
        if( $_POST['universit3']=='Other'){
            $university3 = $_POST['university33'];
        }else{
            $university3 = $_POST['university3'];
        }
        $faculty3 = $_POST['faculty3'];
        $department3 = $_POST['department3'];
        $grad_year3 = $_POST['grad_year3'];
        $cv3 = $_POST['cv3'];
        $name5 = $_POST['name5'];
        $phone5 = $_POST['phone5'];
        $email5 = $_POST['email5'];
        if( $_POST['university5']=='Other'){
            $university5 = $_POST['university55'];
        }else{
            $university5 = $_POST['university5'];
        }
        $faculty5 = $_POST['faculty5'];
        $department5 = $_POST['department5'];
        $grad_year5 = $_POST['grad_year5'];
        $cv5 = $_POST['cv5'];
        $email_leader = $_POST['email'];
        $record2 = $connect->query("SELECT Email FROM team_members WHERE Email='$email2'");
        $record3 = $connect->query("SELECT Email FROM team_members WHERE Email='$email3'");
        $record4 = $connect->query("SELECT Email FROM team_members WHERE Email='$email5'");
    if ($record2->num_rows != 0 || $record3->num_rows != 0 || $record4->num_rows != 0)
    echo "<script> alert('Oops!, One of the three emails is already Exist!');  window.location.href='form.php';</script>";
    $insert_member2 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name2','$phone2','$email2','$university2','$faculty2','$department2','$grad_year2','$cv2','$email_leader') ";
    $insert_member3 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name3','$phone3','$email3','$university3','$faculty3','$department3','$grad_year3','$cv3','$email_leader') ";
    $insert_member4 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name5','$phone5','$email5','$university5','$faculty5','$department5','$grad_year5','$cv5','$email_leader') ";

    $connect->query($insert_member2);
    $connect->query($insert_member3);
    if($connect->query($insert_member4))
      echo "<script> window.location.href='main.html';</script>";
    }
    elseif ($_POST['team_size']== '5' ){
        $name2 = $_POST['name2'];
        $phone2 = $_POST['phone2'];
        $email2 = $_POST['email2'];
        if( $_POST['university2']=='Other'){
            $university2 = $_POST['university22'];
        }else{
            $university2 = $_POST['university2'];
        }
        $faculty2 = $_POST['faculty2'];
        $department2 = $_POST['department2'];
        $grad_year2 = $_POST['grad_year2'];
        $cv2 = $_POST['cv2'];
        $name3 = $_POST['name3'];
        $phone3 = $_POST['phone3'];
        $email3 = $_POST['email3'];
        if( $_POST['universit3']=='Other'){
            $university3 = $_POST['university33'];
        }else{
            $university3 = $_POST['university3'];
        }
        $faculty3 = $_POST['faculty3'];
        $department3 = $_POST['department3'];
        $grad_year3 = $_POST['grad_year3'];
        $cv3 = $_POST['cv3'];
        $name4 = $_POST['name4'];
        $phone4 = $_POST['phone4'];
        $email4 = $_POST['email4'];
        if( $_POST['universit4']=='Other'){
            $university4 = $_POST['university44'];
        }else{
            $university4 = $_POST['university4'];
        }
        $faculty4 = $_POST['faculty4'];
        $department4 = $_POST['department4'];
        $grad_year4 = $_POST['grad_year4'];
        $cv4 = $_POST['cv4'];
        $email_leader = $_POST['email'];
        $name5 = $_POST['name5'];
        $phone5 = $_POST['phone5'];
        $email5 = $_POST['email5'];
        if( $_POST['university5']=='Other'){
            $university5 = $_POST['university55'];
        }else{
            $university5 = $_POST['university5'];
        }
        $faculty5 = $_POST['faculty5'];
        $department5 = $_POST['department5'];
        $grad_year5 = $_POST['grad_year5'];
        $cv5 = $_POST['cv5'];
        $email_leader = $_POST['email'];
        $record2 = $connect->query("SELECT Email FROM team_members WHERE Email='$email2'");
        $record3 = $connect->query("SELECT Email FROM team_members WHERE Email='$email3'");
        $record4 = $connect->query("SELECT Email FROM team_members WHERE Email='$email4'");
        $record5 = $connect->query("SELECT Email FROM team_members WHERE Email='$email5'");
    if ($record2->num_rows != 0 && $record3->num_rows != 0 && $record4->num_rows != 0 && $record5->num_rows != 0)
       echo "<script> alert('Oops!, One of the 4 emails is already Exist!');  window.location.href='form.php';</script>";
    $insert_member2 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name2','$phone2','$email2','$university2','$faculty2','$department2','$grad_year2','$cv2','$email_leader') ";
    $insert_member3 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name3','$phone3','$email3','$university3','$faculty3','$department3','$grad_year3','$cv3','$email_leader') ";
    $insert_member4 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name4','$phone4','$email4','$university4','$faculty4','$department4','$grad_year4','$cv4','$email_leader') ";
    $insert_member4 = "INSERT INTO team_members(Name,Phone,Email,University,Faculty,Department,Graduation_Year,CV,Team_leader_email) 
    values('$name5','$phone5','$email5','$university5','$faculty5','$department5','$grad_year5','$cv5','$email_leader') ";

    $connect->query($insert_member2);
    $connect->query($insert_member3);
    $connect->query($insert_member4);
    if($connect->query($insert_member5))
       echo "<script> window.location.href='main.html';</script>";

    }
}

?>