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

function FormCadastroPet() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
            <h1 style={{padding:32}}>{ id == undefined ? "Cadastro de pets" : "Alteração de pets"}</h1>
            <Form
                labelCol={{
                span: 6,
                }}
                wrapperCol={{
                span: 14,
                }}
                layout="horizontal"
                style={{
                maxWidth: 600,
                }}
            >
                <div style={{display:"grid"}}>
                    <Form.Item label="Cliente Código">
                        <Input  value={inputNome}/>
                    </Form.Item>
                    <Form.Item label="Nome">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Data de Nascimento">
                        <Input />
                    </Form.Item>
                        <Space wrap>
                            <Button type="primary">Gravar</Button>
                            <Button href="/pets">Voltar</Button>
                        </Space>
                </div>
                
            </Form>
        </div>

    )
}

export default FormCadastroPet;