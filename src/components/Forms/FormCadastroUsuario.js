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
import InputCamuflado from "../Utils/InputSenha";
import InputSenha from "../Utils/InputSenha";

function FormCadastroUsuario() {

    let { id } = useParams();

    const [inputNome, setInputNome] = useState('');

    useEffect(function() {
        if(id != undefined){
            //chamo aqui uma funcao para trazer o usuario com aquele id que será editado;
        }
    })

    return (
        <div>
            <h1 style={{padding:32}}>{ id == undefined ? "Cadastro de usuário" : "Alteração de usuário"}</h1>
            <Form
                labelCol={{
                span: 6,
                }}
                wrapperCol={{
                span:50,
                }}
                layout="horizontal"
                style={{
                maxWidth: 1000,
                }}
            >
                <div style={{display:"flex", gap:32}}>
                    <div style={{margin:35}}>
                        <Form.Item label="Nome">
                            <Input  value={inputNome}/>
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Senha">
                            <InputSenha/>
                        </Form.Item>
                        <Form.Item label="CPF">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Endereço">
                            <Input />
                        </Form.Item>
                    </div>
                    <div style={{
                        margin: 35
                    }}>
                        <Form.Item label="CEP">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Cidade">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Estado">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Contato">
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
                        <Form.Item style={{marginLeft:95}}>
                            <Space wrap>
                                <Button type="primary">Gravar</Button>
                                <Button href="/pets">Voltar</Button>
                            </Space>
                        </Form.Item>
                    </div>
                </div>
               
               
                
            </Form>
        </div>

    )
}

export default FormCadastroUsuario;