
import MetaApi from "metaapi.cloud-sdk"
const token =
  "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5NWM3MGVhMmMyZGQwMGRhZGQxOWQ1ZjgwYTM4MTRkYyIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7Im1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7Im1ldGhvZHMiOlsibWV0YXN0YXRzLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsibWV0aG9kcyI6WyJtdC1tYW5hZ2VyLWFwaTpyZXN0OmRlYWxpbmc6KjoqIiwibXQtbWFuYWdlci1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfV0sInRva2VuSWQiOiIyMDIxMDIxMyIsImltcGVyc29uYXRlZCI6ZmFsc2UsInJlYWxVc2VySWQiOiI5NWM3MGVhMmMyZGQwMGRhZGQxOWQ1ZjgwYTM4MTRkYyIsImlhdCI6MTY4Mzk1NzQzNn0.n0NYrHYdeCjLc_VaGinX_LeIAtkdmafoLYHDTs81lthraphsw01sq63lC4GUPaHp8bbMFAE6y0CqTIihua5AJ56X2hj7nOds12NDf1pEXWjlqqfAI7DEPdf3h-B8rfx7ZyDmnthJBGYO0FZ0tiw1keNzJ-7s4y0fvH8taShWTg4IwVr-vMSsDSAUgnsuX2NThSQ59WLF_IhGGeslMWY_lXLxia8QYBH8MEUMAMF-Woj7xI9y496UEXNAKAZyhIEVYVpN3FV-aL2tHpuKF8_Zcxv2tb-KXz9ZJeDgoR6GKpAxoiW85-3YY1AvaNzQ4CwYuBLC15wHev8qH-Wn6kiFMIWFXzAx5rQ70d67wALv97XHkkzFWBn2Usdq39XR9GRCFvq8H3csLc0nuGrmrv3lOEV-tg_6jcKhjr6o7SJTB3JRZHG2azeVtBICUJ8YBdzU2c2BrpUxsQ0hvSTlXFuTTuv18oA4EBvzRggbxP1FuxWsv1HhgUkX_eqrP9-C2dLecEeBxGExNWHEjahR7qs-FzvTkFpYHLs920bF8pEsW06Px7kf-3RW5v7TxmVJ5tGuBaHxJ6Rtifsg8Fc3Bbn8QU51DKcmRuG1q5mDiN5Z9JaVCZ-aqDAlA-EnXKXoDpAbXAE1tAHij_eVFVigOFIH_ERIJS2tB8vOrDM6WWOqH4Y";

const api = new MetaApi(token);
const arrayAcounts = [{login:"5268915A" , password:"Tten.07.788"}]

export async function  createAccount(){
  let accounts = await api.metatraderAccountApi.getAccounts();
  const ArrayAux =[]
  
  arrayAcounts.forEach(async Account => {
    try {
      let account = accounts.find(a => a.login == Account.login)
      if(account) return ArrayAux.push({login: Account.login, state: " Ya exsiste "})
      account = await api.metatraderAccountApi.createAccount({
        name: Account.login,
        type: 'cloud-g2',
        login: Account.login,
        password: Account.password,
        server: 'Deriv-Demo',
        platform: 'mt5',
        magic:0
      });
      ArrayAux.push({login: Account.login, state: "Creada"})

    } catch (error) {
      ArrayAux.push({login: Account.login, state: "No se pudo crear", error})
    }
      
    })
  return ArrayAux
  
  
}
export async function metaconnect() {
  let accounts = await api.metatraderAccountApi.getAccounts();

    const account = await api.metatraderAccountApi.getAccount(
      accounts[0]._data._id
    );
      console.log( accounts[0]._data)
     let connection = account.getStreamingConnection();
    await connection.connect();
    
  try {
  
    const historyStorage = connection.historyStorage;
    const valores = Object.values(historyStorage);
    return valores;
    
  } catch (error) {
    console.log("ocurrio un error" + error);
  }
  finally{
    await connection.close();
    await account.undeploy();
  }
}

