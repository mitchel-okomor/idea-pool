# Idea-Pool Server

A backend service for generating ideas

## Stack

Express
Mysql
Equelize,
JWT

## Environment variables

set environemnt variables accordingly
.env for development environment
.env.production for production environment

## Installation

Yarn install

## Start dev serve

Yarn dev

## production build

yarn build

## Start production server

Yarn start

## API ENDPOINTS ON HEROKU

## home

https://mideapool.herokuapp.com/

## Signup

https://mideapool.herokuapp.com/api/auth/signup

Method: POST\
request payload: {\
"name": "Peter",
"email": "me@p.com",\
"password": "password"\
}

response: {\
"status": "success",\
"data": {\
"user": {\
"id": 5,\
"name": "Peter",\
"email": "me@p.com"\
}\
},\
"message": "Registration Successfull! Kindly login to your email account confirm your email address."\
}

## Login

https://mideapool.herokuapp.com/api/auth/login

Method: POST\
request payload:{\
"email": "me@p.com",\
"password": "password"\
}\
respose: {\
"status": "success",\
"data": {\
"user": {\
"id": 5,\
"name": "Peter",\
"email": "me@p.com"\
},\
"token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgyMDAyODQsImV4cCI6MTYyODI4NjY4NH0.cbpO1fKO18z7eZOei15dtVp3UUsqMmQCZnwk5Qy7S7zlJXhgYUjw37PToR6wbkfr7AqWliQrfKGoqdnMUNEGhKAzFZg6dXdXfObDElK-z2bH_rdOBU_H3uVA0Jqyqd7dk13saiI0Mtwl0kmoxCNs7CtnC-HTfSbHxjX8nKgyPpsf-RxTZGX0uVJaL2TjFlgxrn6JRec_737NW-bTOv8fRsXbl0woa04QqX_HifkhJAPc1MlwrAmSoJoECHmCbazwquPAbjBIfaHGYRvch-CZs1l_mPAnUaUZTb1Begx3KsGlnbW1b4XciSazz_PcoF48Ef-a1uH6w2su51KhN9OON95cSrxwvIznRdMjaSJqsCtu9RJXuE_X0dXeHsmadnfqpL99vkTyxKuXeGTVAf4lkClhgf8mwUdUNkKURvVeH2L_8JW-mBPaOC0CA65N5krYj_9Ouvlnlrcouj9-7X79MHActg1zrccCNgABFY8Nq4CPsJfmMeFeYrzqWaXrj2q5oORwKQ3DvCwwAYCxIIJ31INIQbspnQbgEeV3ONxTQjgRykL7YF8afKjmyQGIAHFGwm05keM8QYJOb5hxCDy1ejms3z-mYXHR2Gtydiyn87562iL6FgjRoSxMAvqrtPf-PuXAenWHs6wzb5L7V7mU7PDDXq7rHqDyl0_NUd5_p-4",\
"expiresIn": "1d"\
},\
"message": "LoggedIn successfully"\
}

## Update user

https://mideapool.herokuapp.com/api/auth/user/1

Method: PATCH\
Header:{
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgxNzQwOTk2MTMsImV4cCI6MTYyODE3NDE4NjAxM30.PxNBiDSXLADtvnVRNa7MgVVyXwiFd-yGu36hYO18F0hSk1jauPb15JcQw9tJI8rhdiVK1Zj8DUb_7fW8K9HP-4LirIZ0To4qOZjfHde3YKDVSfReuCUIjXuorOuK_kWBB3EyLlU4JgH9AyblC9OxQtNEQoqBGQnWVjsW3EPvuZy48OvIo0BSCeU1H3FQU6O-gjMaKysPN6VHquFkTa27FalnEGRpKRA3Zu4xWZO6b94HhkLSY0UNZi10tsDiJK40tpYnAXaDSp4b8HQtceSHeQ2Yyj9hhYZNzRLxltOBjq6wVxCfApgNxpKi5zchuQnAD-SKKZZEZERF_Nigmr3l4eZ8MH-0FHf-b_Zkfyi0Qy2R9cxiRTPIEGsyFRCW6cwTFBte-EkdYpodiM_fy9T7NGa9V19p9vgm-ieg583LAzbo9pXG9bn9HR2u9SqTEQDZYbYGh9wlYVdILH5ByqzeP7IEdSmZNVZ2r-CS4Oz44lEVzAHg74F9WjnZRjuqU1hq-IFPByFwhlySmqORLEIoNIyi9b0m9J80s2WYmy2sFrTG9UfznYpGRMPRiGPu-YfxE649MlBwD1ROkvktQugER0lB3VtdCgzV5rqbT6M-xVGgS0ry78wf2br27jitHyEjzWRnerxkomI1c66GLaccwSVaQHOE-FgZdTTLDuNFa30",\
}\
request payload: {\
"name": "Peter parker 4"\
}

response:{\
"status": "success",\
"resultCount": 1,\
"data": [\
1\
],\
"message": "User updated successful"\
}

## Create Idea

https://mideapool.herokuapp.com/api/ideas/idea

Method: POST\
Header:{\
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgxNzQwOTk2MTMsImV4cCI6MTYyODE3NDE4NjAxM30.PxNBiDSXLADtvnVRNa7MgVVyXwiFd-yGu36hYO18F0hSk1jauPb15JcQw9tJI8rhdiVK1Zj8DUb_7fW8K9HP-4LirIZ0To4qOZjfHde3YKDVSfReuCUIjXuorOuK_kWBB3EyLlU4JgH9AyblC9OxQtNEQoqBGQnWVjsW3EPvuZy48OvIo0BSCeU1H3FQU6O-gjMaKysPN6VHquFkTa27FalnEGRpKRA3Zu4xWZO6b94HhkLSY0UNZi10tsDiJK40tpYnAXaDSp4b8HQtceSHeQ2Yyj9hhYZNzRLxltOBjq6wVxCfApgNxpKi5zchuQnAD-SKKZZEZERF_Nigmr3l4eZ8MH-0FHf-b_Zkfyi0Qy2R9cxiRTPIEGsyFRCW6cwTFBte-EkdYpodiM_fy9T7NGa9V19p9vgm-ieg583LAzbo9pXG9bn9HR2u9SqTEQDZYbYGh9wlYVdILH5ByqzeP7IEdSmZNVZ2r-CS4Oz44lEVzAHg74F9WjnZRjuqU1hq-IFPByFwhlySmqORLEIoNIyi9b0m9J80s2WYmy2sFrTG9UfznYpGRMPRiGPu-YfxE649MlBwD1ROkvktQugER0lB3VtdCgzV5rqbT6M-xVGgS0ry78wf2br27jitHyEjzWRnerxkomI1c66GLaccwSVaQHOE-FgZdTTLDuNFa30",\
}\
request payload: {\
"text": "Coffee kills brain cells",\
"impact": "7",\
"ease": "8",\
"confidence": "1"\
}

response: {\
"status": "success",\
"data": {\
"id": 2,\
"userId": "1",\
"text": "Micro cameras can be made invisible",\
"impact": "7",\
"ease": "8",\
"confidence": "1",\
"updatedAt": "2021-08-05T23:04:34.556Z",\
"createdAt": "2021-08-05T23:04:34.556Z"\
},\
"message": "Successful"\
}

## Delete Idea

https://mideapool.herokuapp.com/api/ideas/1

Method: DELETE\
Header:{\
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgxNzQwOTk2MTMsImV4cCI6MTYyODE3NDE4NjAxM30.PxNBiDSXLADtvnVRNa7MgVVyXwiFd-yGu36hYO18F0hSk1jauPb15JcQw9tJI8rhdiVK1Zj8DUb_7fW8K9HP-4LirIZ0To4qOZjfHde3YKDVSfReuCUIjXuorOuK_kWBB3EyLlU4JgH9AyblC9OxQtNEQoqBGQnWVjsW3EPvuZy48OvIo0BSCeU1H3FQU6O-gjMaKysPN6VHquFkTa27FalnEGRpKRA3Zu4xWZO6b94HhkLSY0UNZi10tsDiJK40tpYnAXaDSp4b8HQtceSHeQ2Yyj9hhYZNzRLxltOBjq6wVxCfApgNxpKi5zchuQnAD-SKKZZEZERF_Nigmr3l4eZ8MH-0FHf-b_Zkfyi0Qy2R9cxiRTPIEGsyFRCW6cwTFBte-EkdYpodiM_fy9T7NGa9V19p9vgm-ieg583LAzbo9pXG9bn9HR2u9SqTEQDZYbYGh9wlYVdILH5ByqzeP7IEdSmZNVZ2r-CS4Oz44lEVzAHg74F9WjnZRjuqU1hq-IFPByFwhlySmqORLEIoNIyi9b0m9J80s2WYmy2sFrTG9UfznYpGRMPRiGPu-YfxE649MlBwD1ROkvktQugER0lB3VtdCgzV5rqbT6M-xVGgS0ry78wf2br27jitHyEjzWRnerxkomI1c66GLaccwSVaQHOE-FgZdTTLDuNFa30",\
}\
Response:{\
"Status": "success",\
"message": "Idea deleted successfully"\
}

## Update Idea

https://mideapool.herokuapp.com/api/ideas/1

Method: PATCH\
Header:{\
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgxNzQwOTk2MTMsImV4cCI6MTYyODE3NDE4NjAxM30.PxNBiDSXLADtvnVRNa7MgVVyXwiFd-yGu36hYO18F0hSk1jauPb15JcQw9tJI8rhdiVK1Zj8DUb_7fW8K9HP-4LirIZ0To4qOZjfHde3YKDVSfReuCUIjXuorOuK_kWBB3EyLlU4JgH9AyblC9OxQtNEQoqBGQnWVjsW3EPvuZy48OvIo0BSCeU1H3FQU6O-gjMaKysPN6VHquFkTa27FalnEGRpKRA3Zu4xWZO6b94HhkLSY0UNZi10tsDiJK40tpYnAXaDSp4b8HQtceSHeQ2Yyj9hhYZNzRLxltOBjq6wVxCfApgNxpKi5zchuQnAD-SKKZZEZERF_Nigmr3l4eZ8MH-0FHf-b_Zkfyi0Qy2R9cxiRTPIEGsyFRCW6cwTFBte-EkdYpodiM_fy9T7NGa9V19p9vgm-ieg583LAzbo9pXG9bn9HR2u9SqTEQDZYbYGh9wlYVdILH5ByqzeP7IEdSmZNVZ2r-CS4Oz44lEVzAHg74F9WjnZRjuqU1hq-IFPByFwhlySmqORLEIoNIyi9b0m9J80s2WYmy2sFrTG9UfznYpGRMPRiGPu-YfxE649MlBwD1ROkvktQugER0lB3VtdCgzV5rqbT6M-xVGgS0ry78wf2br27jitHyEjzWRnerxkomI1c66GLaccwSVaQHOE-FgZdTTLDuNFa30",\
}\
Request paylaod:{\
"impact": "3",\
}\
Response:{\
"status": "success",\
"resultCount": 1,\
"data": [\
1
],\
"message": "Idea updated successful"\
}

## Fetch Authorized user ideas

https://mideapool.herokuapp.com/api/ideas/1

Method: GET\
Header:{\
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibWVAcC5jb20iLCJpYXQiOjE2MjgxNzQwOTk2MTMsImV4cCI6MTYyODE3NDE4NjAxM30.PxNBiDSXLADtvnVRNa7MgVVyXwiFd-yGu36hYO18F0hSk1jauPb15JcQw9tJI8rhdiVK1Zj8DUb_7fW8K9HP-4LirIZ0To4qOZjfHde3YKDVSfReuCUIjXuorOuK_kWBB3EyLlU4JgH9AyblC9OxQtNEQoqBGQnWVjsW3EPvuZy48OvIo0BSCeU1H3FQU6O-gjMaKysPN6VHquFkTa27FalnEGRpKRA3Zu4xWZO6b94HhkLSY0UNZi10tsDiJK40tpYnAXaDSp4b8HQtceSHeQ2Yyj9hhYZNzRLxltOBjq6wVxCfApgNxpKi5zchuQnAD-SKKZZEZERF_Nigmr3l4eZ8MH-0FHf-b_Zkfyi0Qy2R9cxiRTPIEGsyFRCW6cwTFBte-EkdYpodiM_fy9T7NGa9V19p9vgm-ieg583LAzbo9pXG9bn9HR2u9SqTEQDZYbYGh9wlYVdILH5ByqzeP7IEdSmZNVZ2r-CS4Oz44lEVzAHg74F9WjnZRjuqU1hq-IFPByFwhlySmqORLEIoNIyi9b0m9J80s2WYmy2sFrTG9UfznYpGRMPRiGPu-YfxE649MlBwD1ROkvktQugER0lB3VtdCgzV5rqbT6M-xVGgS0ry78wf2br27jitHyEjzWRnerxkomI1c66GLaccwSVaQHOE-FgZdTTLDuNFa30",\
}\
Response:{\
"status": "success",\
"resultCount": 1,\
"data": [\
{\
"id": 1,\
"userId": 1,\
"text": "Soft kills are underated",\
"ease": 7,\
"impact": 7,\
"confidence": 1,\
"avg": "5.0000"\
}\
],\
"message": ""\
}
