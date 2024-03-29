import { Sequelize, DataTypes, Model} from 'sequelize'

require('dotenv').config() // IMPORTANTE PER USARE LA URL DEL DB

const dbOptions = {}
if (process.env.IS_HEROKU)
  dbOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }

const database = new Sequelize(process.env.DATABASE_URL, dbOptions)

async function initializeDatabase() {
  try {
    await database.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }

  class Image extends Model {}

  Image.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      URL: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
      caption: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'Image',
      tableName: 'Images',
      timestamps: false,
    }
  )

  class PointOfInterest extends Model {}

  PointOfInterest.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      mapURL: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'PointOfInterest',
      tableName: 'PointsOfInterest',
      timestamps: false,
    }
  )

  class Itinerary extends Model {}

  Itinerary.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      mapURL: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'Itinerary',
      tableName: 'Itineraries',
      timestamps: false,
    }
  )

  function formatDate(d){
    return d.getDate() + '/' + 
    (d.getMonth() < 9 ? '0' : '') + 
    (d.getMonth() + 1) + '/' + d.getFullYear();
  }

  class Event extends Model {
    static async FindAllEventsBetweenMonths(begin = 1, end = 12, startingIndex = undefined, itemCount = undefined){
      let b = begin
      let e = end
      if(isNaN(b) || isNaN(e)) throw new Error('begin and end must be numbers')
      if(b<1) b = 1
      if(e>12) e = 12
      
      const queryOptions = {
        include: { model: Image},
      }
    
      if(e>b){
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") BETWEEN ' + b + ' AND ' + e + ') OR (extract(MONTH FROM "Event"."endDate") BETWEEN ' + b + ' AND ' + e + ')')
      }
      else if(e===b){
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") = ' + b + ') OR (extract(MONTH FROM "Event"."endDate") = ' + b + ')')
      }
      else{
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") NOT BETWEEN ' + e + ' AND ' + b + ') OR (extract(MONTH FROM "Event"."endDate") NOT BETWEEN ' + e + ' AND ' + b + ')')
      }
    
      if(startingIndex) queryOptions.offset = startingIndex
      if(itemCount) queryOptions.limit = itemCount
    
      return await Event.findAll(queryOptions)
    }

    static async CountAllEventsBetweenMonths(begin = 1, end = 12){
      let b = begin
      let e = end
      if(isNaN(b) || isNaN(e)) throw new Error('begin and end must be numbers')
      if(b<1) b = 1
      if(e>12) e = 12
      
      const queryOptions = {}
    
      if(e>b){
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") BETWEEN ' + b + ' AND ' + e + ') OR (extract(MONTH FROM "Event"."endDate") BETWEEN ' + b + ' AND ' + e + ')')
      }
      else if(e===b){
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") = ' + b + ') OR (extract(MONTH FROM "Event"."endDate") = ' + b + ')')
      }
      else{
        queryOptions.where = database.literal('(extract(MONTH FROM "Event"."startDate") NOT BETWEEN ' + e + ' AND ' + b + ') OR (extract(MONTH FROM "Event"."endDate") NOT BETWEEN ' + e + ' AND ' + b + ')')
      }
    
      return await Event.count(queryOptions)
    }

    getFormatedStartDate(){
      return formatDate(this.startDate)
    }

    getFormatedEndDate(){
      return formatDate(this.endDate)
    }
  }

  Event.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mapURL: {
        type: DataTypes.STRING(2048),
        allowNull: true,
      },
    },
    {
      sequelize: database,
      modelName: 'Event',
      tableName: 'Events',
      timestamps: false,
    }
  )

  class ServiceType extends Model {}

  ServiceType.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      introduction: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'ServiceType',
      tableName: 'ServiceTypes',
      timestamps: false,
    }
  )

  class Service extends Model {}

  Service.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize: database,
      modelName: 'Service',
      tableName: 'Services',
      timestamps: false,
    }
  )

  class OpeningHours extends Model {}

  OpeningHours.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 6,
        },
      },
      openingHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      closingHour: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'OpeningHours',
      tableName: 'OpeningHours',
      timestamps: false,
    }
  )

  class UserMessage extends Model {}

  UserMessage.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
    },
    {
      sequelize: database,
      modelName: 'UserMessage',
      tableName: 'UserMessages',
      timestamps: false,
    }
  )

  // Hosting relation
  Event.belongsToMany(PointOfInterest, {
    through: 'EventLocation',
    timestamps: false,
  })
  PointOfInterest.belongsToMany(Event, {
    through: 'EventLocation',
    timestamps: false,
  })

  // Involvment relation
  Itinerary.belongsToMany(PointOfInterest, {
    through: 'ItineraryComposition',
    timestamps: false,
  })
  PointOfInterest.belongsToMany(Itinerary, {
    through: 'ItineraryComposition',
    timestamps: false,
  })

  // Event image relation
  Event.belongsToMany(Image, {
    through: 'EventImage',
    timestamps: false,
  })
  Image.belongsToMany(Event, {
    through: 'EventImage',
    timestamps: false,
  })

  // Point of interest image relation
  PointOfInterest.belongsToMany(Image, {
    through: 'PointOfInterestImage',
    timestamps: false,
  })
  Image.belongsToMany(PointOfInterest, {
    through: 'PointOfInterestImage',
    timestamps: false,
  })

  // Itinerary image relation
  Image.hasMany(Itinerary, {
    as: 'representativeImage',
    foreignKey: 'representativeImageId',
  })
  Itinerary.belongsTo(Image, {
    as: 'representativeImage',
    foreignKey: 'representativeImageId',
  })

  // Service type image relation
  ServiceType.belongsTo(Image)
  Image.hasMany(ServiceType)

  // Service image relation
  Service.belongsTo(Image)
  Image.hasMany(Service)

  // Belonging relation
  Service.belongsTo(ServiceType)
  ServiceType.hasMany(Service)

  // Adherence relation
  OpeningHours.belongsTo(Service)
  Service.hasMany(OpeningHours)

  const ret = {
    Image,
    PointOfInterest,
    Itinerary,
    Event,
    ServiceType,
    Service,
    OpeningHours,
    UserMessage,
  }

  if (process.env.RESET_DB) ret.SyncDatabase = syncDatabase

  ret.randomOrder = () => database.random()

  return ret
}

async function syncDatabase(force = false) {
  
  try {
    if (force) {
      await database.sync({ force: true })
    } else {
      await database.sync({ alter: true })
    }
    console.log('Tables syncronized')
  } catch (error) {
    console.error('Unable to sync:', error)
    throw error
  }
}

const databaseStructure = initializeDatabase()

export default databaseStructure
