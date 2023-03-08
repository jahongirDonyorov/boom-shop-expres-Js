import express from "express";
import { create } from "express-handlebars";
import AuthRoutes from './routes/auth.js'// bular routeslarni ulash uchun
import ProductsRoutes from './routes/products.js'
// const __filename =  fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename) // package.json da type: modul qilganligimiz uchun __dirname _-filename yu bularkan ushanchun bularni qulda yozvoldik

const app = express( )

const hbs = create({defaultLayout: 'main',extname: 'hbs'})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.use(AuthRoutes) // ulangan routeslarni ishlatish uchun
app.use(ProductsRoutes)

const PORT = process.env.PORT || 4100

app.listen(PORT, ( ) => console.log(`Server is running on port: ${PORT}`))