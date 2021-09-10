import React, {useContext, useState} from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Form, Input, Button, message} from 'antd'
import {Fade} from "react-reveal";
import './styles.scss'
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import axios from "axios";

export default function ContactUs() {
  const {isDark} = useContext(StyleContext);
  const [formInfo , setFormInfo] = useState({
    email: "",
    message : "",
    userName : ""
  })

  const [form] = Form.useForm();
  if (!skillsSection.display) {
    return null;
  }

  const resetForm = () =>{
    form.resetFields()
    setFormInfo({})
  }

  const finishHandler =  async() =>{
    console.log(formInfo)
    if(formInfo.email && formInfo.message) {
      try{
            const res = await axios({
            method: "post" ,
            url: "https://mysterious-sea-77977.herokuapp.com/api/mailme",
            data: {
                from: formInfo.email,
                text: formInfo.message
            }
          })
          if(res.status===200){
              console.log(res)
              console.log(res.data)
              message.success(res.data.message, 2.5)
              resetForm()
          }

      } catch(err){
          console.log('error', err)
      }

    }
}

  const changeHandler = (e) =>{
    setFormInfo({
      ...formInfo,
      [e.target.name] : e.target.value
    })
  }
  console.log('form info', formInfo)
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="contactUs">
      <div className="contact-header">Get in touch</div>
      <div className="contactUs-main-div">
        <Fade left duration={1000}>
          <div className="contactUs-div">
              <Form onFinish={finishHandler} className="form"
              form={form}
              labelCol={{ span: 8 }}
              >
                    <div className="contact-form-div">
                        <Form.Item 
                        name="userName"
                        rules={[
                          {
                            required: "true",
                            message: "Please input your name"
                          }
                        ]}
                        className="form-labels"
                        >
                          <Input 
                          autoComplete="false"
                          className="form-inputs" type="text"  value={formInfo.userName} onChange={changeHandler} placeholder="Name" name="userName"/>
                        </Form.Item>
                        
                        <Form.Item 
                        name="email"
                        rules={[
                          {
                            type: "email" ,
                            message: "Please enter a valid email"
                          } ,
                          {
                            required: "true",
                            message: "Please input your email"
                          }
                        ]}
                        className="form-labels"
                        >
                          <Input  className="form-inputs" type="email"  value={formInfo.email} name="email" onChange={changeHandler} placeholder="Email" />
                        </Form.Item> 

                        <Form.Item 
                        name="message"
                        rules={[
                          {
                            required: "true",
                            message: "um...yea, you have to write something to send this form."
                          }
                        ]}
                        className="form-labels text-label"
                        >
                          <Input.TextArea className="form-inputs textArea-input" type="text"  value={formInfo.message} onChange={changeHandler} placeholder="Enter message" rows={6} name="message"/>
                        </Form.Item>
                         <Form.Item className="button-label" style={{marginBottom: "13px"}}>
                            <Button  htmlType="submit" onClick={finishHandler}
                            className="submit-button">
                              Send Message
                            </Button>
                        </Form.Item>
                    </div>

              </Form>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="contactus-image-div">
                <img  
                    src={require("../../assets/images/contactUs.svg")}
                    alt="Contact info"
                />
          </div>
        </Fade>
      </div>
    </div>
  );
}
