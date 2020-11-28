async function scheduleAppointment(event, context) {
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Hello from Schedule Appointment' }),
    };
  }
  export const handler = scheduleAppointment;