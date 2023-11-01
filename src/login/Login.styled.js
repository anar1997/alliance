import styled from 'styled-components';


export const HomePageDiv = styled.div`

    background-image: url('https://images.wallpaperscraft.com/image/single/mountains_clouds_dusk_154131_1920x1080.jpg');
    width: 100%;
    min-height: 100vh;
    float: right;
    position: absolute;
    .form{
        width:500px;
        height: 400px;
        background-color: white;
        margin: 200px auto 0 auto;
        border-radius: 24px;
    }
    .title{
        margin: 0 auto 0 auto;
        font: 30px Segoe UI;
        padding-top: 30px;
        display: block;
        text-align: center;
    }
    .input_title{
        margin: 9px auto 0 auto;
        font: 500 20px Segoe UI;
        display: block;
        text-align: center;
    }
    .input{
        margin: 0 auto 0 auto;
        font: 20px Segoe UI;
        display: block;
        text-align: center;
        border-radius: 10px;
        background-color: #c0c0c0;
    }
    .input:focus{
        outline: none;
        border: 0;
    }
    .submit{
        margin: 0 auto 0 auto;
        font: 600 35px Segoe UI;
        display: block;
        padding: 7px 45px 10px 45px ;
        background-color:  #24619A;
        margin-top: -30px;
        color:white;
        border-radius: 15px;
    }
    .alertNow{
        width: 500px;
        background-color: red;
        color: white;
        font:  600  35px Segoe UI;
        text-align: center;
        padding: 20px 0;
        margin: 20px auto 0 auto;
        border-radius: 20px;
    }
`;


