import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
// import * as FaIcons from "react-icons/fa";
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from "react-toastify";

const Footer = ({ data }) => {
    const [loading, setLoading] = useState(false); // Added loading state

    const router = useRouter();
    const locale = router.locale;

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('email', values.email);

            const response = await axios.post(ACTION_ROUTES.SubScribeAPI, formData);

            if (response.data.errors && Array.isArray(response.data.errors)) {
                const errorsObject = {};
                response.data.errors.forEach((error) => {
                    errorsObject[error.code] = error.message;
                });

                setErrors(errorsObject);
                setLoading(false);
                setSubmitting(false);
                return; // Exit the function to prevent further execution
            }

            toast.success(response.data.message);
            resetForm();
            setLoading(false);

        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (Array.isArray(data.errors)) {
                    // Handle forbidden error
                    console.error('Validation errors:', data.errors);
                    data.errors.forEach((error) => {
                        console.error('Error:', error.message);
                        // You can set individual error messages for each field here
                        if (error.code === 'email') {
                            setErrors({ email: error.message });
                        }
                        // Handle other error codes if needed
                    });
                } else {
                    // Handle other errors
                    console.error('Something Went Wrong:', error);
                    toast.error('Please try again later.');
                }
            } else {
                console.error('Something Went Wrong:', error);
                toast.error('Please try again later.');
            }
            setSubmitting(false);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="footer__area footer__style-2">
                <div className="footer__top">
                    <div className="footer__top-border">
                        <div className="container">
                            <div className="row footer__bottom-border">
                                <div className="col-xxl-6 col-xl-6 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget mb-50 footer-col-4-1">
                                        <div className="footer__info">
                                            <div className="footer__logo">
                                                <Link href="#">
                                                    <Image className="logo-white mb-4" src="/img/logo.png" alt="logo" width={50} height={50} />
                                                </Link>
                                            </div>
                                            <p>Digital Launchpad Marketplace for IDOs, Private Sales, Seed and more. Invest, Raise, Trade.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget footer-col-2-2 mb-50">
                                        <h3 className="footer__widget-title">Community</h3>
                                        <ul className="social-footer">
                                            <li><Link href={'/#'}><i className="fa-brands fa-telegram me-2"></i> Telegram</Link></li>
                                            <li><Link href={'/#'}><i className="fa-brands fa-twitter me-2"></i> Twitter</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget footer-col-2-3 mb-50">
                                        <h3 className="footer__widget-title">Support</h3>
                                        <ul>
                                            <li><Link href="/#">Community</Link></li>
                                            <li><Link href="/#">Guidelines</Link></li>
                                            <li><Link href="/#">Documentation</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer__widget footer-col-2-3 mb-50">
                                        <h3 className="footer__widget-title">Company</h3>
                                        <ul>
                                            <li><Link href="/#">About</Link></li>
                                            <li><Link href="/#">Roadmap</Link></li>
                                            <li><Link href="/#">Blog</Link></li>
                                            <li><Link href="/#">Career</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer__bottom`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__copyright mb-2 mb-md-0">
                                    <p>© 2022 <Link href="/">Presale Market</Link>. All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-sm-6">
                                <div className="footer__menu text-sm-end">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                    <Link href="/imprint">Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
