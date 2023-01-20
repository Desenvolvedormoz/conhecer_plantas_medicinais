import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    containerAll: {
        padding: 5,
        flex: 1,
        justifyContent: `center`,
        alignItems: 'center',
        backgroundColor: '#fff',    
    }, 
    container: {
        width: '100%',
        height: `auto`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: 5,
        backgroundColor: `#eee`,
        marginBottom: 15,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 22,
        fontWeight: `700`,
        marginBottom: 15,
    },
    item: {
        padding: 2,
        paddingLeft: 10,
        fontSize: 16,
        height: 44,
        marginBottom: 15,
      },
    descricao: {
        fontSize: 15,
        marginVertical: 5,
    },
    imagem: {
        width: '100%',
        height: 100,
    },
    listaContainer: {
        width: '100%',
        borderEndWidth: 2,
    },
    button: {
        width: 240,
        height: 50,
        backgroundColor: `#3cb371`,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    strong: {
        fontSize: 16,
        fontWeight: '700',
    },
    myImage: {
        width: '100%',
        height: 200,
        marginTop: 1,
    },
    myContainer: {
        width: '100%',
        padding: 5,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 15,
    },
    texto: {
        fontSize: 18,
        fontWeight: '300',
    },
    nota: {
        borderWidth: 1,
        width: 100,
        marginTop: 30,
    },
    strongLink: {
        fontSize: 18,
        color: '#99F',
    },
    italico: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '500',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    credito: {
        fontSize: 6,
    },
    subtituloLink:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#64F',
        marginVertical: 15,
    }
});
export default estilos;