import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import event from '../images/eventPicture.png';

const Demo = ({ refToDemo }) => {
    const [firstName, setFirstName] = useState('');
    const [firstNameInvalid, setFirstNameInvalid] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameInvalid, setLastNameInvalid] = useState(false);
    const [preMethod, setPreMethod] = useState('email');
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneInvalid, setPhoneInvalid] = useState(false);

    const [loading, setLoading] = useState(false);
    const [showSubmitted, setShowSubmitted] = useState(false);

    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false);
            setShowSubmitted(true);
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;
        if (firstName === '') {
            setFirstNameInvalid(true);
            error = true;
        }
        if (lastName === '') {
            setLastNameInvalid(true);
            error = true;
        }
        if (preMethod==='email' && email === '') {
            setEmailInvalid(true);
            error = true;
        }
        if (preMethod === 'phone' && phone === '') {
            setPhoneInvalid(true);
            error = true;
        }
        if (!error) {
            setLoading(true);
            handleLoading();
        }
    };

    return (
        <Fragment>
            <section ref={refToDemo} className="frame12Outer">
                <section className="frame12">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <p className="customH2">
                                    Book a demo
                                </p>
                                <p className="customNormal">
                                    Fields marked with a <span className="required">*</span> are required
                                </p>
                                {loading &&
                                    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                }
                                {showSubmitted &&
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-4">
                                                <i
                                                    class="fa fa-check-circle"
                                                    style={{ fontSize: '150px', color: '#006600' }}
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div className="col-sm-12 col-md-8">
                                                <p className="customH2">
                                                    Demo request sent!
                                                </p>
                                                <p className="customNormal">
                                                    Someone will reach out to schedule your
                                                    demo within the next 48 business hours
                                                </p>
                                                <a href="#">
                                                    Request another demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {!loading && !showSubmitted &&
                                    <form
                                        onSubmit={handleSubmit}
                                    >
                                        <Form.Group className="mb-3">
                                            <Form.Label
                                                forhtml="firstName"
                                                className="form-label"
                                            >First Name <span className="required">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="inputStyles"
                                                id="firstName"
                                                aria-describedby="firstNameInput"
                                                value={firstName}
                                                onChange={(e) => {
                                                    setFirstName(e.target.value);
                                                    setFirstNameInvalid(false);
                                                }}
                                                isInvalid={firstNameInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                First name is required
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label
                                                forhtml="lastName"
                                                className="form-label"
                                            >Last Name <span className="required">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control inputStyles"
                                                id="lastName"
                                                aria-describedby="lastNameInput"
                                                value={lastName}
                                                onChange={(e) => {
                                                    setLastName(e.target.value);
                                                    setLastNameInvalid(false);
                                                }}
                                                isInvalid={lastNameInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Last name is required
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label
                                                forhtml="preferredContact"
                                                className="form-label"
                                            >Preferred method of contact
                                            </Form.Label>
                                            <Form.Check
                                                type="radio"
                                                name="preferredContact"
                                                id="emailRadio"
                                                label="Email"
                                                onChange={() => setPreMethod('email')}
                                                checked={preMethod === 'email'}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="preferredContact"
                                                id="phoneRadio"
                                                onChange={() => setPreMethod('phone')}
                                                label="Phone"
                                                checked={preMethod === 'phone'}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label
                                                forhtml="email"
                                                className="form-label"
                                            >Email 
                                                {preMethod === 'email' ?
                                                    <span className="required">*</span>
                                                    : null
                                                }
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control inputStyles"
                                                id="email"
                                                aria-describedby="emailInput"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    setEmailInvalid(false);
                                                }}
                                                isInvalid={preMethod === 'email' && emailInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Email is required
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label
                                                forhtml="phone"
                                                className="form-label"
                                            >Phone Number 
                                                {preMethod === 'phone' ?
                                                    <span className="required">*</span>
                                                    : null
                                                }
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control inputStyles"
                                                id="phone"
                                                aria-describedby="phoneInput"
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    setPhoneInvalid(false);
                                                }}
                                                isInvalid={preMethod === 'phone' && phoneInvalid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Phone is required
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <button type="submit" className="btn custom-btn-primary">Sign Up</button>
                                    </form>
                                }
                            </div>
                            <div
                                className="col-sm-12 col-md-6"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}
                            >
                                <img src={event} alt="" width="482px" height="364px" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    );
}

export default Demo;
