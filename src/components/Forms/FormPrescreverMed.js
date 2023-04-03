import React, { useEffect } from "react";
import { useState } from 'react';
import {
    Button,
    Form,
    Input,
    Select,
    Space,
    Switch,
  } from 'antd';
import { useParams } from "react-router-dom";
import InputTextBox from "../Utils/InputTextBox";

function FormCadastroClientes() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
            <h1 style={{padding:32}}>{ id == undefined ? "Prescrever Medicamentos" : "Alteração de Prescrição"}</h1>
            <Form
                labelCol={{
                span: 15,
                }}
                wrapperCol={{
                span:80,
                }}
                layout="horizontal"
                style={{
                maxWidth: 1000,
                }}
            >   <InputTextBox/>
                        <Form.Item style={{marginLeft:95}}>
                            <Space wrap>
                                <Button type="primary">Gravar</Button>
                                <Button href="/pets">Voltar</Button>
                            </Space>
                        </Form.Item>
               
            </Form>
        </div>

    )
}

export default FormCadastroClientes;