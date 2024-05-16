import psycopg2
from config import config

def get_records():
    try:
        params = config()
        connection = psycopg2.connect(**params)
        cursor = connection.cursor()
        query_records = "SELECT * FROM patients"
        cursor.execute(query_records)
        records = cursor.fetchall()
        return records
    except (Exception, psycopg2.Error) as error:
        print(f"Failed to retrieve records: {error}")
    finally:
        if connection:
            cursor.close()
            connection.close()