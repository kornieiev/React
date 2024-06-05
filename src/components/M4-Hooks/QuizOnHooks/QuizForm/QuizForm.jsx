import { Formik } from 'formik';
import { ErrorMessage, Field, Form } from './QuizForm.styled';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  topic: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  time: Yup.number()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  questions: Yup.number()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  level: Yup.string()
    .default('beginner')
    .required('Required')
    .oneOf(['beginner', 'intermediate', 'advanced'], 'Invalid level')
    .label('Selected level'),
});

export default function QuizForm({ select, onAdd }) {
  const valuesArr = select.map(item => item.level);
  const valuesTypes = [...new Set(valuesArr)];

  return (
    <div>
      <Formik
        initialValues={{
          topic: '',
          level: 'beginner',
          time: 0,
          questions: 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <Form>
            <label>
              Topic:
              <Field name="topic" placeholder="Topic" />
              <ErrorMessage component="span" name="topic" />
            </label>

            <label>
              Time:
              <Field name="time" placeholder="Time" type="number" />
              <ErrorMessage component="span" name="time" />
            </label>

            <label>
              Questions:
              <Field name="questions" placeholder="Questions" type="number" />
              <ErrorMessage component="span" name="questions" />
            </label>

            <label>
              Level:
              <Field
                as="select"
                name="level"
                onChange={handleChange}
                value={values.level}
              >
                {valuesTypes.map(item => (
                  <option key={Date.now() + item} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
              <ErrorMessage component="span" name="level" />
            </label>

            <button type="submit">Add new Quiz</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
