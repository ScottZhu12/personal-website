import { motion } from 'framer-motion';
import { Form, Field } from 'react-final-form';

import { headingRightVariants } from '../../variables';
import { lineRightVariants } from '../../variables';

const formVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    duration: 0.4,
  },
};

const Contact = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.name) errors.name = 'name cannot be empty';

    if (!formValues.email) errors.email = 'email cannot be empty';

    return errors;
  };

  const renderInput = ({ input, type, placeholder }) => {
    return (
      <div className='form-input'>
        <input
          className='form-input__field'
          type={type}
          {...input}
          autoComplete='off'
          placeholder={placeholder}
        />
      </div>
    );
  };

  const renderForm = (handleSubmit) => {
    return (
      <motion.form
        onSubmit={handleSubmit}
        className='form'
        variants={formVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-250px' }}
      >
        <div className='paragraph paragraph--contact'>
          Have a question or want to work together?
        </div>

        <Field
          name='name'
          component={renderInput}
          type='text'
          placeholder='Name'
        />
        <Field
          name='email'
          component={renderInput}
          type='email'
          placeholder='Enter email'
        />
        <Field
          name='message'
          component='textarea'
          placeholder='Your Message'
          className='form-textarea'
        />
        <button type='submit' className='btn btn--form'>
          SUBMIT
        </button>
      </motion.form>
    );
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-content'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-200px' }}
        >
          <motion.h2
            className='heading heading--contact'
            variants={headingRightVariants}
          >
            CONTACT <br />
            <motion.span
              className='underline underline--contact'
              variants={lineRightVariants}
            ></motion.span>
          </motion.h2>
        </motion.div>

        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => renderForm(handleSubmit)}
        />
      </div>
    </div>
  );
};

export default Contact;
