import react from 'react';
import { Formik, useField } from 'formik';
import { Button, View, StyleSheet } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12,
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
 return (
  <StyledTextInput 
    value={field.value} 
    onChangeText={value => helpers.setValue(value)} 
    {...props}
  />
 )
  
}

export default function LogInPage() {
  return (
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue 
              name='email'
              placeholder='E-mail'
            />
            <FormikInputValue
              name='password' 
              placeholder='Password'
            />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}