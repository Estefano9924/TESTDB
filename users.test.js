const { MongoClient } = require("mongodb");
const { faker } = require("@faker-js/faker");

jest.setTimeout(30000);

const uri =
  "mongodb+srv://Estefano9924:Bv86-q2N4*Hd_DU@safety.qwf32yg.mongodb.net/?retryWrites=true&w=majority&appName=safety";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

describe("Database Tests", () => {
  let usersCollection;

  beforeAll(async () => {
    try {
      await client.connect();
      const db = client.db("Safety_Xpert");
      usersCollection = db.collection("Users");
    } catch (err) {
      console.error("Error connecting to the database:", err);
    }
  });

  //creacion de Usuarios

  /*test("Test CREATE", async () => {
    let newUsers = [];
    let total_users_to_add = 1;

    for (let i = 0; i < total_users_to_add; i++) {
      newUsers.push({
        
          name: "Juan",
          surname: {
              paternalSurname: "Pérez",
              maternalSurname: "García"
          },
          TypeDoc: "DNI", // Ej: 'DNI', 'CC', 'CE', 'Pasaporte'
          idDoc: "12345678",
          genero: "Masculino", // Ej: 'Masculino', 'Femenino'
          birthplace: {
              country: "Colombia",
              state: "Antioquia",
              city: "Medellín"
          },
          birthDate: "2024-07-18T00:00:00Z",
          email: "juan.perez@example.com",
          phoneNumber: "555-1234",
          rol: "administrador",  // Ej: 'administrador', 'conductor', 'soporte'
          creationDate: "2024-07-18T00:00:00Z",
          Username: "Jperez",
          password: "sadfjkñwe324djfsñldfk23",
          status: "active" // Ej: 'active', 'inactive'
      });
    }

    const result = await usersCollection.insertMany(newUsers);
    expect(result.insertedCount).toBe(total_users_to_add);
  }, 30000);
  */

  test("Test READ", async () => {
    let sampleUser = { name: "Test User", email: "test@user.com" };

    await usersCollection.insertOne(sampleUser);

    //const findUser = await usersCollection.findOne({ email: sampleUser.email });

    //expect(findUser.name).toBe(sampleUser.name);
  }, 30000);

  // Eliminacion de Usuarios total
  afterEach(async () => {
    await usersCollection.deleteMany({});
  });

  afterAll(async () => {
    await client.close();
  });
});
