import {
  TEMP_MIN,
  TEMP_MUY_FRIO,
  TEMP_FRIO,
  TEMP_TEMPLADO,
  TEMP_CALIENTE,
  HUM_MIN,
  HUM_MUY_BAJA,
  HUM_BAJA,
  HUM_MEDIA,
  HUM_ALTA,
  TEMP_SUELO_MIN,
  TEMP_SUELO_MUY_FRIO,
  TEMP_SUELO_FRIO,
  TEMP_SUELO_TEMPLADO,
  TEMP_SUELO_CALIENTE,
  VEL_MIN,
  VEL_MUY_BAJA,
  VEL_BAJA,
  VEL_MEDIA,
  VEL_ALTA,
} from './ConstantsAlerts';

// Función para la alerta de riego por temperatura del aire
function alertaTemperaturaAire({tempAire}) {
    if (tempAire <= TEMP_MUY_FRIO) return {
        message: "No Riego",
        icon: "warning",
        ruleMessage: "Si la Temperatura del Aire es Muy Frío, entonces Alerta es No Riego",
    };
    if (tempAire <= TEMP_FRIO) return {
        message: "Riego Ligero",
        icon: "info",
        ruleMessage: "Si la Temperatura del Aire es Frío, entonces Alerta es Riego Ligero",
    };
    if (tempAire <= TEMP_TEMPLADO) return {
        message: "Riego Normal",
        icon: "info",
        ruleMessage: "Si la Temperatura del Aire es Templado, entonces Alerta es Riego Normal",
    };
    if (tempAire <= TEMP_CALIENTE) return {
        message: "Riego Frecuente",
        icon: "info",
        ruleMessage: "Si la Temperatura del Aire es Caliente, entonces Alerta es Riego Frecuente",
    };
    return {
        message: "Riego Abundante",
        icon: "info",
        ruleMessage: "Si Temperatura del Aire es Muy Caliente, entonces Alerta es Riego Abundante",
    };
}

// Función para la alerta de riego por humedad del suelo
function alertaHumedadSuelo({humedad}) {
    if (humedad <= HUM_MUY_BAJA) return {
        message: "Riego Inmediato",
        icon: "warning",
        ruleMessage: "Si la Humedad es Muy Baja, entonces Alerta es Riego Inmediato",
    };
    if (humedad <= HUM_BAJA) return {
        message: "Riego Pronto",
        icon: "info",
        ruleMessage: "Si la Humedad es Baja, entonces Alerta es Riego Pronto",
    };
    if (humedad <= HUM_MEDIA) return {
        message: "No Riego Necesario",
        icon: "info",
        ruleMessage: "Si Humedad es Media, entonces Alerta es No Riego Necesario",
    };
    if (humedad <= HUM_ALTA) return {
        message: "Monitorear Suelo",
        icon: "info",
        ruleMessage: "Si la Humedad es Alta, entonces Alerta es Monitorear Suelo",
    };
    return {
        message: "No Riego",
        icon: "warning",
        ruleMessage: "Si la Humedad es Muy Alta, entonces Alerta es No Riego",
    };
}

// Función para la alerta de riego por temperatura del suelo
function alertaTemperaturaSuelo({tempSuelo}) {
    if (tempSuelo <= TEMP_SUELO_MUY_FRIO) return {
        message: "Evitar Riego",
        icon: "warning",
        ruleMessage: "Si Temperatura del Suelo es Muy Fría, entonces Alerta es Evitar Riego",
    };
    if (tempSuelo <= TEMP_SUELO_FRIO) return {
        message: "Riego Ligero",
        icon: "info",
        ruleMessage: "Si la Temperatura del Suelo es Fría, entonces Alerta es Riego Ligero",
    };
    if (tempSuelo <= TEMP_SUELO_TEMPLADO) return {
        message: "Riego Normal",
        icon: "info",
        ruleMessage: "Si Temperatura del Suelo es Templada, entonces Alerta es Riego Normal",
    };
    if (tempSuelo <= TEMP_SUELO_CALIENTE) return {
        message: "Riego Frecuente",
        icon: "info",
        ruleMessage: "Si Temperatura del Suelo es Caliente, entonces Alerta es Riego Frecuente",
    };
    return {
        message: "Riego Abundante",
        icon: "info",
        ruleMessage: "Si Temperatura del Suelo es Muy Caliente, entonces Alerta es Riego Abundante",
    };
}

// Función para la alerta de riego por velocidad del viento
function alertaVelocidadViento({velocidad}) {
    if (velocidad <= VEL_MUY_BAJA) return {
        message: "No Impacto en Riego",
        icon: "info",
        ruleMessage: "Si Velocidad del Viento es Muy Baja, entonces Alerta es No Impacto en Riego",
    };
    if (velocidad <= VEL_BAJA) return {
        message: "Riego Ligero",
        icon: "info",
        ruleMessage: "Si la velocidad del viento es baja, entonces Alerta es Riego Normal",
    };
    if (velocidad <= VEL_MEDIA) return {
        message: "Riego Frecuente",
        icon: "info",
        ruleMessage: "Si Velocidad del Viento es Media, entonces Alerta es Riego Frecuente",
    };
    if (velocidad <= VEL_ALTA) return{
        message: "Evitar Riego",
        icon: "warning",
        ruleMessage: "Si Velocidad del Viento es Alta, entonces Alerta es Riego Muy Frecuente",
    };
    return {
        message: "Posponer Riego",
        icon: "warning",
        ruleMessage: "Si Velocidad del Viento es Muy Alta, entonces Alerta es Posponer Riego",
    };
}

// TODO: Implementar funciones de alertas de cada sensor
export function alertEachSensor({temperaturaAire = 0, humedadSuelo = 0, temperaturaSuelo = 0, velocidadViento = 0}) {
    if (temperaturaAire > TEMP_MIN && temperaturaAire !== 0) {
        return alertaTemperaturaAire({tempAire: temperaturaAire});
    }
    if (humedadSuelo > HUM_MIN && humedadSuelo !== 0) {
        return alertaHumedadSuelo({humedad: humedadSuelo});
    }
    if (temperaturaSuelo > TEMP_SUELO_MIN && temperaturaSuelo !== 0) {
        return alertaTemperaturaSuelo({tempSuelo: temperaturaSuelo});
    }
    if (velocidadViento > VEL_MIN && velocidadViento !== 0) {
        return alertaVelocidadViento({velocidad: velocidadViento});
    }
    return null;
}

// Función combinada para alertas de riego
export function alertMixed({temperaturaAire = 0, humedadSuelo = 0, temperaturaSuelo = 0, velocidadViento = 0}) {
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
    
    // Si no se cumple ninguna condición específica, devolver null
    return null;
}