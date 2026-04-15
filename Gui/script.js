const SUPABASE_URL = "https://udpbkcsihtbqvmpmedmv.supabase.co"
const SUPABASE_KEY = "udpbkcsihtbqvmpmedmv"

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function testeConexao() {
  const { data, error } = await supabaseClient
    .from("usuarios")
    .select("*")

  console.log("DADOS:", data)
  console.log("ERRO:", error)
}

testeConexao()