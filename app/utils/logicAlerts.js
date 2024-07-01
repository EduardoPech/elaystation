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
        return {
            message: "Riego Abundante y Frecuente",
            icon: "info",
            ruleMessage: "Temperatura del aire alta, humedad del suelo baja y velocidad del viento alta",
        };
    }
    if ((temperaturaAire >= TEMP_CALIENTE && humedadSuelo <= HUM_BAJA) || 
    (temperaturaSuelo >= TEMP_SUELO_CALIENTE && humedadSuelo <= HUM_BAJA)) {
        return {
            message: "Riego Inmediato y Abundante",
            icon: "info",
            ruleMessage: "Temperatura del aire alta y humedad del suelo baja",
        }
    }
    if (temperaturaAire >= TEMP_CALIENTE && velocidadViento >= VEL_ALTA) {
        return {
            message: "Evitar Riego",
            icon: "warning",
            ruleMessage: "Temperatura del aire alta y velocidad del viento alta",
        }
    }
    if (humedadSuelo <= HUM_BAJA && (velocidadViento >= VEL_MEDIA && velocidadViento <= VEL_ALTA)) {
        return {
            message: "Riego Frecuente",
            icon: "info",
            ruleMessage: "Humedad del suelo baja y velocidad del viento media-alta",
        }
    }
    if (humedadSuelo >= HUM_ALTA && (velocidadViento >= VEL_BAJA && velocidadViento <= VEL_MEDIA )) {
        return {
            message: "Riego Ligero Recomendado",
            icon: "info",
            ruleMessage: "Humedad del suelo alta y velocidad del viento baja-media",
        };
    }
    if ((temperaturaAire => TEMP_FRIO && temperaturaAire <= TEMP_TEMPLADO) && humedadSuelo >= HUM_ALTA) {
        return {
            message: "Riego Moderado Sugerido",
            icon: "info",
            ruleMessage: "Temperatura del aire templada y humedad del suelo alta",
        };
    }
    if (temperaturaSuelo >= TEMP_SUELO_CALIENTE && humedadSuelo >= HUM_ALTA) {
        return {
            message: "Monitoreo del Suelo Sugerido, Riego Ligero si es necesario",
            icon: "info",
            ruleMessage: "Temperatura del suelo alta y humedad del suelo alta",
        };
    }
    if (velocidadViento > VEL_ALTA && humedadSuelo > HUM_ALTA) {
        return {
            message: "Evitar Riego, Posible Pérdida por Evaporación",
            icon: "info",
            ruleMessage: "Velocidad del viento alta y humedad del suelo alta",
        };
    }
    if (temperaturaAire >= TEMP_CALIENTE && humedadSuelo >= HUM_ALTA && (velocidadViento >= VEL_BAJA && velocidadViento <= VEL_MEDIA)) {
        return {
            message: "Riego Moderado para Balancear Pérdida de Agua",
            icon: "info",
            ruleMessage: "Temperatura del aire alta, humedad del suelo alta y velocidad del viento baja-media",
        };
    }
    
    // Si no se cumple ninguna condición específica, devolver una alerta general
    return null;
}