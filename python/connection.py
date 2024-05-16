import psycopg2
from config import config
from flask import Flask, request, render_template
from getRecords import get_records

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('forms_python.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    id = request.form.get('id')
    f_name = request.form.get('f_name')
    m_name = request.form.get('m_name')
    surname = request.form.get('surname')
    dob = request.form.get('dob')
    gender = request.form.get('gender')
    county = request.form.get('county')

    query = "INSERT INTO patients (id, f_name, m_name, surname, gender, county, dob) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    values = (id, f_name, m_name, surname, gender, county, dob)

    try:
        params = config()
        connection = psycopg2.connect(**params)

        # create a cursor
        crsr = connection.cursor()
        crsr.execute(query, values)
        connection.commit()
        print('Record inserted successfully')
        #data = crsr.fetchall()
        #for x in crsr:
            #print(x)
        crsr.close()
        connection.close()
        #print(data)

    except (Exception, psycopg2.Error) as error:
        print(f"Failed to insert record: {error}")
    except (psycopg2.DatabaseError, Exception) as error:
            print(error)
    return 'Form submitted successfully'

@app.route('/records')
def display_records():
    records = get_records()
    return render_template('records.html', records=records)

if __name__ == '__main__':
    app.run(debug=True)