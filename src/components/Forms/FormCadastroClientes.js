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
            <h1 style={{padding:32}}>{ id == undefined ? "Cadastro de clientes" : "Alteração de clientes"}</h1>
            <Form
                labelCol={{
                span: 4,
                }}
                wrapperCol={{
                span: 14,
                }}
                layout="horizontal"
                style={{
                maxWidth: 600,
                }}
            >
                <Form.Item label="Nome">
                    <Input  value={inputNome}/>
                </Form.Item>
                <Form.Item label="Email">
                    <Input />
                </Form.Item>
                <Form.Item label="Senha">
                    <Input />
                </Form.Item>
                <Form.Item label="Perfil">
                    <Select defaultValue={"--Selecione--"}>
                        <Select.Option value="-1">--Selecione--</Select.Option>
                        <Select.Option value="1">Administrador</Select.Option>
                        <Select.Option value="2">Funcionário</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Ativo" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item>
                    <Space wrap>
                        <Button type="primary">Gravar</Button>
                        <Button href="/clientes">Voltar</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>

    )
}

export default FormCadastroClientes;