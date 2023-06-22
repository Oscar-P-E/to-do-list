import "./styles.css";

const test = (surname: string) => {
    const fullName = "Bob" + " " + surname;
    return `hello ${fullName}`
}

console.log(test("Dole"))