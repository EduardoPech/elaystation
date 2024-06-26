import {
  TEMP_MUY_FRIO,
  TEMP_FRIO,
  TEMP_TEMPLADO,
  TEMP_CALIENTE,
  HUM_MIN,
  HUM_MUY_BAJA,
  HUM_BAJA,
  HUM_MEDIA,
  HUM_ALTA,
  TEMP_SUELO_MUY_FRIO,
  TEMP_SUELO_FRIO,
  TEMP_SUELO_TEMPLADO,
  TEMP_SUELO_CALIENTE,
  VEL_MUY_BAJA,
  VEL_BAJA,
  VEL_MEDIA,
  VEL_ALTA,
} from './ConstantsAlerts';

// Función para la alerta de riego por temperatura del aire
function alertaTemperaturaAire(temperatura) {
    if (temperatura <= TEMP_MUY_FRIO) return "No Riego";
    if (temperatura <= TEMP_FRIO) return "Riego Ligero";
    if (temperatura <= TEMP_TEMPLADO) return "Riego Normal";
    if (temperatura <= TEMP_CALIENTE) return "Riego Frecuente";
    return "Riego Abundante";
}

// Función para la alerta de riego por humedad del suelo
function alertaHumedadSuelo(humedad) {
    if (humedad <= HUM_MUY_BAJA) return "Riego Inmediato";
    if (humedad <= HUM_BAJA) return "Riego Pronto";
    if (humedad <= HUM_MEDIA) return "No Riego Necesario";
    if (humedad <= HUM_ALTA) return "Monitorear Suelo";
    return "No Riego";
}

// Función para la alerta de riego por temperatura del suelo
function alertaTemperaturaSuelo(temperatura) {
    if (temperatura <= TEMP_SUELO_MUY_FRIO) return "Evitar Riego";
    if (temperatura <= TEMP_SUELO_FRIO) return "Riego Ligero";
    if (temperatura <= TEMP_SUELO_TEMPLADO) return "Riego Normal";
    if (temperatura <= TEMP_SUELO_CALIENTE) return "Riego Frecuente";
    return "Riego Abundante";
}

// Función para la alerta de riego por velocidad del viento
function alertaVelocidadViento(velocidad) {
    if (velocidad <= VEL_MUY_BAJA) return "No Impacto en Riego";
    if (velocidad <= VEL_BAJA) return "Riego Normal";
    if (velocidad <= VEL_MEDIA) return "Riego Frecuente";
    if (velocidad <= VEL_ALTA) return "Riego Muy Frecuente";
    return "Posponer Riego";
}

// Función combinada para alertas de riego
export function alertMixed(temperaturaAire, humedadSuelo, temperaturaSuelo, velocidadViento) {
    if (temperaturaAire >= TEMP_CALIENTE && humedadSuelo <= HUM_BAJA && velocidadViento >= VEL_ALTA) {
        return "Riego Abundante y Frecuente";
    }
    if ((temperaturaAire >= TEMP_CALIENTE && humedadSuelo <= HUM_BAJA) || 
    (temperaturaSuelo >= TEMP_SUELO_CALIENTE && humedadSuelo <= HUM_BAJA)) {
        return "Riego Inmediato y Abundante";
    }
    if (temperaturaAire >= TEMP_CALIENTE && velocidadViento >= VEL_ALTA) {
        return "Evitar Riego";
    }
    if (humedadSuelo <= HUM_BAJA && (velocidadViento >= VEL_MEDIA && velocidadViento <= VEL_ALTA)) {
        return "Riego Frecuente";
    }
    if (humedadSuelo >= HUM_ALTA && (velocidadViento >= VEL_BAJA && velocidadViento <= VEL_MEDIA )) {
        return "Riego Ligero Recomendado";
    }
    if ((temperaturaAire => TEMP_FRIO && temperaturaAire <= TEMP_TEMPLADO) && humedadSuelo >= HUM_ALTA) {
        return "Riego Moderado Sugerido";
    }
    if (temperaturaSuelo >= TEMP_SUELO_CALIENTE && humedadSuelo >= HUM_ALTA) {
        return "Monitoreo del Suelo Sugerido, Riego Ligero si es necesario";
    }
    if (velocidadViento > VEL_ALTA && humedadSuelo > HUM_ALTA) {
        return "Evitar Riego, Posible Pérdida por Evaporación";
    }
    if (temperaturaAire >= TEMP_CALIENTE && humedadSuelo >= HUM_ALTA && (velocidadViento >= VEL_BAJA && velocidadViento <= VEL_MEDIA)) {
        return "Riego Moderado para Balancear Pérdida de Agua";
    }
    
    // Si no se cumple ninguna condición específica, devolver una alerta general
    return "Revisar condiciones individualmente";
}