'use client'

import { useEffect, useState } from "react";

const PersonAge = ({ birthdate }) => {
    const [age, setAge] = useState(null);

    useEffect(() => {
        const calculateAge = () => {
            const birthDate = new Date(birthdate);
            const currentDate = new Date();

            let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

            if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
                calculatedAge--;
            }
            setAge(calculatedAge);
        };
        calculateAge();
    }, [birthdate]);

    return (
    <div> 
        {age !== null ? (
            <p>
                {age} år
            </p>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
}

export default PersonAge;