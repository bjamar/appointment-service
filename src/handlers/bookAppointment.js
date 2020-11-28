


async function bookAppointment(event, context) {


  return {
    statusCode: 201,
    body: JSON.stringify({ message: 'Hello from Book Appointment' }),
  };
}

export const handler = bookAppointment;


